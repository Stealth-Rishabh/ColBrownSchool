<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php-errors.log');

// CORS headers
header("Access-Control-Allow-Origin: *"); // Allow all origins for development
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header('Content-Type: application/json');

try {
    // Log raw POST data first
    error_log("Raw POST data: " . file_get_contents('php://input'));
    error_log("POST array: " . print_r($_POST, true));

    // Get POST data with strict checking
    $parentName = $_POST['contact-parent-name'] ?? '';
    $studentName = $_POST['contact-student-name'] ?? '';
    $email = $_POST['contact-email'] ?? '';
    $phone = $_POST['contact-phone'] ?? '';
    $state = $_POST['contact-state'] ?? '';
    $city = $_POST['contact-city'] ?? '';
    $class = $_POST['contact-class'] ?? '';
    $enquiry = $_POST['contact-enquiry'] ?? '';
    $referrer = $_POST['referrer_name'] ?? '';
    $keyword = $_POST['keyword'] ?? '';
    $source = $_POST['source'] ?? 'website';
    $orderid = $_POST['orderid'] ?? '973';
    $sitename = $_POST['sitename'] ?? 'BFISWebsite2022';
    $campaign_url = $_POST['campaign_url'] ?? '';
    $campaign_name = $_POST['campaign_name'] ?? '';
    $network = $_POST['network'] ?? '';

    // Validate required fields including state and city
    if (empty($parentName) || empty($studentName) || empty($email) || empty($phone) || 
        empty($class) || empty($enquiry) || empty($state) || empty($city)) {
        throw new Exception('All fields are mandatory');
    }

    // Log specific class value
    error_log("Class value received: " . $class);

    // Update queryContent to include state and city
    $queryContent = "Student Name: " . $studentName . "\nEnquiry: " . $enquiry . 
                   "\nClass: " . $class . "\nState: " . $state . "\nCity: " . $city;

    // Explicitly set course in CRM fields
    $uniFields = array(
        'name' => $parentName,
        'query' => $queryContent,
        'email' => $email,
        'phone' => $phone,
        'state' => urlencode($state),
        'city' => urlencode($city),
        'http_referer' => urlencode($referrer),
        'search_keyword' => urlencode($keyword),
        'campaign_url' => urlencode($campaign_url),
        'campaign_name' => urlencode($campaign_name),
        'network' => urlencode($network),
        'source' => urlencode($source),
        'ORDERID' => urlencode($orderid),
        'SITENAME' => urlencode($sitename)
    );

    error_log("Prepared CRM fields: " . print_r($uniFields, true));

    // Build query string without additional encoding
    $uni_fields_string = http_build_query($uniFields, '', '&', PHP_QUERY_RFC3986);
    error_log("Final query string: " . $uni_fields_string);

    // Make the CRM request
    $post = curl_init();
    curl_setopt($post, CURLOPT_URL, 'https://crm.stealthdigital.in/lp/index');
    curl_setopt($post, CURLOPT_POST, true);
    curl_setopt($post, CURLOPT_POSTFIELDS, $uni_fields_string);
    curl_setopt($post, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($post, CURLOPT_FOLLOWLOCATION, true);
    
    $content = curl_exec($post);
    $httpCode = curl_getinfo($post, CURLINFO_HTTP_CODE);
    
    error_log("CRM Response Code: " . $httpCode);
    error_log("CRM Response Content: " . $content);

    if ($httpCode !== 200) {
        throw new Exception('CRM returned non-200 status code: ' . $httpCode);
    }

    curl_close($post);

    // Return detailed response for debugging
    echo json_encode([
        'success' => true,
        'message' => 'Form submitted successfully',
        'debug' => [
            'received_class' => $class,
            'crm_response' => $content,
            'http_code' => $httpCode
        ]
    ]);

} catch (Exception $e) {
    error_log("Error in form submission: " . $e->getMessage());
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage(),
        'debug' => [
            'post_data' => $_POST,
            'class_value' => $_POST['contact-class'] ?? 'not set',
            'error' => $e->getMessage()
        ]
    ]);
}
?>