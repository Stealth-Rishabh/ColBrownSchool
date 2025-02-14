<?php /** Template Name: Template Registration */?>

<?php 

// get_header();

// error_reporting(E_ALL);



require ("/home4/colbrxub/public_html/ccavenue/token_gen/autoload.php");

$sessionProvider = new EasyCSRF\NativeSessionProvider();

$easyCSRF = new EasyCSRF\EasyCSRF($sessionProvider);



$token = $easyCSRF->generate('DI7f9UhB9rE7CtZKsccul2IWE2vweS');



global $wp_query;

$postid = $wp_query->post->ID;



$backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );

?>

<!doctype html>

<html lang="en">

  <head>

    <!-- Required meta tags -->

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Registration | Col Brown Cambridge School</title>

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

	<style>

	a.hover{

		text-decoration: none;

	}

	h3.line-bottom {

		position: relative;

		font-size: 18px;

		line-height: 1.6;

		color: #262626;

		margin-bottom: 50px;

		font-weight: 400;

	}

	.registration-form .pull-right {

		float: right;

	}

	.registration-form .mandatory {

		color: red;

	}

	.registration-form .contact-dtl {

		background: #fafafa none repeat scroll 0 0;

		border: 1px solid #c1c1c1;

		margin: 50px 0;

		padding: 0 20px 5px;

	}

	.registration-form .contact-dtl label.error {

		color: #f92626;

		font-weight: 500;

		font-size: 13px;

	}

	.registration-form .contact-dtl>h3 {

		background: #fafafa none repeat scroll 0 0;

		color: #004f38;

		font-size: 20px;

		margin: -16px 0 12px;

		padding: 4px 10px;

		float: left;

		font-weight: 600;

		position: absolute;

		text-transform: capitalize;

	}

	.registration-form .padding-top {

		padding-top: 30px;

	}

	.registration-form  .form-group {

		margin-left: 0;

		margin-right: 0;

	}

	.registration-form .form-group {

		margin-bottom: 1rem;

	}

	form.registration-form  label {

		font-weight: 600;

		font-size: 15px;

	}

	.registration-form  label {

		display: inline-block;

		margin-bottom: 0.5rem;

	}

	.registration-form .contact_col .form-control {

		border: 1px solid #d0cdcd;

	}

	.registration-form .form-control {

		display: block;

		width: 100%;

		height: 44px;

		padding: 8px 16px;

		font-size: 16px;

		font-weight: 400;

		line-height: 1.5;

		color: #495057;

		background-color: #fff;

		background-clip: padding-box;

		border: 1px solid #ced4da;

		border-radius: 0;

		transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

	}

	.registration-form .input-group input {

		width: auto;

	}

	.registration-form .input-group span.input-group-text {

		background: #fafafa;

		border-radius: 0;

		color: #222;

	}

	.registration-form .form-control:focus{

		box-shadow: none;

	}

	.registration-form button.submit_button, button.submit_button:hover {

		background: linear-gradient(#fffe2c, #fffe2c);

		color: #004f38;

		font-weight: 700;

		font-size: 15px;

		padding: 15px 33px;

	}

	.terms-condition .form-group label {

		font-weight: 500;

		font-size: 16px;

	}

	.terms-condition span.imp-note {

		font-size: 14px;

		line-height: 21px;

		display: block;

		color: #262626;

	}

	.terms-condition span.imp-note strong {

		font-weight: 600;

	}

	.registration-form textarea {

		height: 150px!important;

		width: 100%!important;

	}

	.tc-agree {

		font-size: 17px;

		margin-bottom: 10px;

		font-weight: 600;

		color: #111;

	}

	.tc-agree input[type="checkbox"] {

		margin-top: -3px;

		margin-right: 4px;

	}

	@media screen and (max-width: 767px) {

	  .registration-section .container-fluid {

		padding: 0;

	}

	}

	</style>

	</head>

	<body>



	<section id="cbs-c-container" class="registration-section">

      <div class="container-fluid">

        <!-- <header class="section-header">

          <h3>About Us</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </header> -->



        <div class="row about-cols">

       

        	<?php

				// Start the loop.

				//while ( have_posts() ) : the_post();

			?>

        	<div class="col-12 col-md-12 col-lg-12">

                <div class="icon-box mb-0 p-0">

                  <?php //the_content(); ?>

				  <h3 class="line-bottom mt-0 mb-30">This is online registration form. Please fill up this form and submit to pay online. If you have any queries regarding registration or admissions, please <a href="/contact" target="_blank" rel="noopener noreferrer"> click here</a>.</h3>

                  <!-- Registration Form -->

                  <div class="contact_col comment-content">						

						<!--<form id="contact" action="" method="post">	-->

                        <form method="post" action="https://www.colbrownschool.com/ccavenue/paymentnew.php" id="reg_form" name="reg_form" class="form-horizontal registration-form">		

			            <!--<div class="pull-right" style="margin: -26px 15px 0 0;"><span class="mandatory">* Required fields</span></div>-->

						

			            <div class="contact-dtl">

                            <h3>Child Information</h3>

							<div style="clear: both;"></div>

                            <div class="row padding-top">						  

							  <div class="col-12 col-md-6 col-lg-4">

					        	<div class="form-group">

								    <label for="studentname">Full Name of Boy</label><span class="mandatory"> *</span>

								    <input class="form-control" name="studentname" id="studentname"  type="text">

								</div>				        

							  </div>

							  

							  <div class="col-12 col-md-6 col-lg-4">

					        	<div class="form-group">

								    <label for="dob">Date of Birth</label><span class="mandatory"> *</span>

								    <input class="form-control" name="dob" id="dob" type="date">

								</div>				        

							  </div>  

							  

							  <div class="col-12 col-md-6 col-lg-4">

					        	<div class="form-group">

								    <label for="birthplace">Place of Birth</label><span class="mandatory"> *</span>

								    <input class="form-control" name="birthplace" id="birthplace" type="text">

								</div>				        

							  </div>

                             </div> 

						</div>

			            

			            

			            <div class="contact-dtl">

						<h3>Father/Guardian Information</h3>

						<div style="clear: both;"></div>

							<div class="row padding-top">									  

							  <div class="col-12 col-md-6 col-lg-4">

					        	<div class="form-group">

								    <label for="fathername">Full Name</label><span class="mandatory"> *</span>

								    <input class="form-control" name="fathername" id="fathername" type="text">

								</div>				        

							  </div>

							  

							  <div class="col-12 col-md-6 col-lg-4">

					        	<div class="form-group">

								    <label for="nationality">Nationality</label>

								    <input class="form-control" name="nationality" id="nationality" type="text">

								</div>				        

							  </div>  

							  

							  <div class="col-12 col-md-6 col-lg-4">

					        	<div class="form-group">

								    <label for="occupation">Occupation</label>

								    <input class="form-control" name="occupation" id="occupation" type="text">

								</div>				        

							  </div>

							</div>

						</div>

						  

						 

					<div class="contact-dtl">

						<h3>Contact Information</h3>					  

							  <div style="clear: both;"></div>	

							  <div class="row padding-top">	

								  <div class="col-12 col-md-6 col-lg-4">

						        	<div class="form-group">

									    <label for="country">Country</label><span class="mandatory"> *</span>

									    <!--<input class="form-control" name="country" id="country" type="text">-->

									    <select class="form-control" name="country" id="country" onchange="getChangedData(this.value,'COUNTRY');">

									    	<?php 

									    	$newdb = new wpdb( 'colbrxub_colschdbuser', 'tSVfEdXPPUk[', 'colbrxub_cbsnumsdb', 'localhost' );

											$country = $newdb->get_results( "SELECT * FROM countries" );										

									    	foreach($country as $ct){?>

												<option value="<?php echo $ct->id;?>" <?php if($ct->name =='India'){ echo "selected";}?> ><?php echo $ct->name;?></option>

											<?php } ?>

									    </select>

									</div>				        

								  </div>  

								  

								  <div class="col-12 col-md-6 col-lg-4">

						        	<div class="form-group">

									    <label for="state">State</label><span class="mandatory"> *</span>

									    <!--<input class="form-control" name="state" id="state" type="text">-->

									     <select class="form-control" name="state" id="state" onchange="getChangedData(this.value,'STATES');">

									    	<?php 

									    	$state = $newdb->get_results( "SELECT * FROM states where country_id=101" );

									    	foreach($state as $st){?>

												<option value="<?php echo $st->id;?>" ><?php echo $st->name;?></option>

											<?php } ?>

									    </select>

									</div>				        

								  </div>

								  <div class="col-12 col-md-6 col-lg-4">

						        	<div class="form-group">

									    <label for="city">City</label><span class="mandatory"> *</span>

									    <!--<input class="form-control" name="city" id="city" type="text">-->

									    <select class="form-control" name="city" id="city">

									    	<?php 

									    	$city = $newdb->get_results( "SELECT * FROM cities where state_id=1" );

									    	foreach($city as $cty){?>

												<option value="<?php echo $cty->id;?>" ><?php echo $cty->name;?></option>

											<?php } ?>

									    </select>

									</div>				        

								  </div>	

								  <div class="col-12 col-md-12 col-lg-4">

						        	<div class="form-group">

									    <label for="address">Permanent Address</label><span class="mandatory"> *</span>

									    <!--<input class="form-control" name="address" id="address" type="text">-->

									    <textarea class="form-control" name="address" id="address" rows="6"></textarea>

									</div>				        

								  </div>	

								  <div class="col-12 col-md-12 col-lg-8">

									  <div class="row">

										  <div class="col-12 col-md-6 col-lg-6">

								        	<div class="form-group">

											    <label for="zipcode">Pin Code</label><span class="mandatory"> *</span>

											    <input class="form-control" name="zipcode" id="zipcode" type="text">

											</div>				        

										  </div>

										  

										  <div class="col-12 col-md-6 col-lg-6">

								        	<div class="form-group">

											    <label for="contact_email">Email</label><span class="mandatory"> *</span>

											    <input class="form-control" name="contact_email" id="contact_email" type="text">

											</div>				        

										  </div>

									</div>

									<div class="row">

										<div class="col-12 col-md-6 col-lg-6">

								        	<div class="form-group">

											    <label for="telephone">Mobile Number</label><span class="mandatory"> *</span>

												<div class="input-group">

												  <div class="input-group-prepend">

													<span class="input-group-text input-group-addon" id="std_code">+91</span>

												  </div>

												  <input class="form-control" name="telephone" id="telephone" type="text">

												</div>

											</div>	

										</div>

										<div class="col-12 col-md-6 col-lg-6">

								        	<div class="form-group">

											    <label for="telephone">WhatsApp Number</label>

												<div class="input-group">

												  <div class="input-group-prepend">

													<span class="input-group-text input-group-addon" id="std_code">+91</span>

												  </div>

												  <input class="form-control" name="whatsapp_number" id="whatsapp_number" type="text">

												</div>

											</div>	

										</div>

									  </div>

								  </div>

							</div>

						</div>

						 

						<div class="row contact-dtl terms-condition">

							<h3>Other</h3>		

							<div style="clear: both;"></div>

							<div class="row padding-top">							  

							  <div class="col-12 col-md-6 col-lg-4">

					        	<div class="form-group">

								    <label for="addmissionclass">Year and class in which admission is desired</label><span class="mandatory"> *</span>

								    <!--<input class="form-control" name="addmissionclass" id="addmissionclass" type="text">-->

								    <select class="form-control" name="addmissionclass" id="addmissionclass">

								    	<option value="">Select Class</option>

								    	<!--<option value="2th">2th</option>

								    	<option value="3th">3th</option>-->

								    	<option value="4th">4th</option>

								    	<option value="5th">5th</option>

								    	<option value="6th">6th</option>

								    	<option value="7th">7th</option>

								    	<option value="8th">8th</option>

								    	<option value="9th">9th</option>

								    	<option value="11th">11th</option>

								    </select>

								</div>				        

							  </div>

							  <div class="col-12 col-md-12 col-lg-12">

							  <div class="tc-agree"><input type="checkbox" name="agree"/> I agree terms & conditions.</div>

							  <span class="imp-note"><strong>Note: </strong> Please register my son/ward on your waiting list as per particulars given as above which I certify are true and correct. If my son/ward is selected I agree to fully abide by the Rules and Regulations of the School, pay the fees etc. in advance and settle any other accounts promptly.</span>

							  </div>

							  <div class="col-12 col-md-6 col-lg-4">

					        	<div class="form-group">

								    <label></label>



								    <div id="captcha_message"></div>

									<div class="g-recaptcha" data-sitekey="6LftoiwUAAAAABnCMVn9JNpKHWE9YbhveZtdg34n"></div>  

								  </div>				        

							  </div>

							</div>  

						</div>

						  

						  <div class="col-12 col-md-12 col-lg-12 text-center">

							  <div class="form-group">

								<input type="hidden" name="frmtoken" value="<?php echo($token); ?>" />

								<button type="button" class="submit_button btn btn-contact" id="frmsubmit" name="frmsubmit">Submit to Pay Online</button>

							  </div>

						  </div>

                           

						</form>	

					</div>

                </div>

            </div>

        	<?php //endwhile; ?>

            

            </div>

      </div>

	</section>

<script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>

<script src="https://jqueryvalidation.org/files/dist/additional-methods.min.js"></script>

<!-- <script type='text/javascript' src='https://malsup.github.com/jquery.form.js?ver=3.5.2'></script> -->

<script src='https://www.google.com/recaptcha/api.js'></script>



<script>

	//$().ready(function() {

	jQuery(document).ready(function($){

		// alert($( "#dob" ).length);

		// $( "#dob" ).datepicker({

		// 	changeMonth: true,

		// 	changeYear: true,

		// 	dateFormat: 'dd-mm-yy',

		// 	maxDate: '-5Y',

		// });



		// validate the comment form when it is submitted

		// validate signup form on keyup and submit

		$("#reg_form").validate({

			rules: {

				studentname: "required",

				birthplace: "required",

				dob: "required",

				fathername: "required",

				address: "required",

				country: "required",

				state: "required",

				city: "required",

				zipcode: "required",

				//contact_email: "required",

				//telephone: "required",

				country: "required",

				addmissionclass: "required",

				agree: "required",

				telephone: {

			      required: true,

			      minlength: 10,

			      maxlength: 10,

			      number: true

				},

				contact_email: {

                    required: true,

                    email: true

                },



			}

		});



		$("#frmsubmit").click(function(){  // capture the click

			//alert("yes");

			if($("#reg_form").valid()){   // test for validity

				// do stuff if form is valid

				var recaptcha = document.forms["reg_form"]["g-recaptcha-response"].value;

				if (recaptcha == "") {

					alert("Please fill reCAPTCHA");

					return false;

				}

				

				$('.loader-container').show();			

				$("#reg_form").submit();

			}

		}); 

		

		// propose username by combining first- and lastname

		// show when newsletter is checked

	

	});

	

	function getChangedData(id,type){

		jQuery.ajax({

	          url: 'https://www.colbrownschool.com/ccavenue/getCityState.php',

	          type: 'post',

	          data: { 'id':id,'type':type},

	          success: function (response) {

	          	 if(type=='COUNTRY'){

				 	jQuery('#state').html(response);

				 	

				 	jQuery.ajax({

				          url: 'https://www.colbrownschool.com/ccavenue/getCountryCode.php',

				          type: 'post',

				          data: { 'id':id},

				          success: function (response) {

				          	jQuery("#std_code").text('+'+countryStdCode(response));

				          }

				     });

				 	

				 }

	             else if(type=='STATES'){

				 	jQuery('#city').html(response);

				 } 

	          }

	     });

	     

	}

	

	

	function countryStdCode(countryCode){

	

		var countryCodeList = new Array();

		countryCodeList['AX'] = '358';

		countryCodeList['AF'] = '93';

		countryCodeList['AL'] = '355';

		countryCodeList['DZ'] = '213';

		countryCodeList['AS'] = '684';

		countryCodeList['AD'] = '376';

		countryCodeList['AO'] = '244';

		countryCodeList['AI'] = '1';

		countryCodeList['AQ'] = '672';

		countryCodeList['AG'] = '1';

		countryCodeList['AR'] = '54';

		countryCodeList['AM'] = '374';

		countryCodeList['AW'] = '297';

		countryCodeList['AU'] = '61';

		countryCodeList['AT'] = '43';

		countryCodeList['AZ'] = '994';

		countryCodeList['BS'] = '1';

		countryCodeList['BH'] = '973';

		countryCodeList['BD'] = '880';

		countryCodeList['BB'] = '1';

		countryCodeList['BY'] = '375';

		countryCodeList['BE'] = '32';

		countryCodeList['BZ'] = '501';

		countryCodeList['BJ'] = '229';

		countryCodeList['BM'] = '1';

		countryCodeList['BT'] = '975';

		countryCodeList['BO'] = '591';

		countryCodeList['BA'] = '387';

		countryCodeList['BW'] = '267';

		countryCodeList['BV'] = '47';

		countryCodeList['BR'] = '55';

		countryCodeList['IO'] = '246';

		countryCodeList['BN'] = '673';

		countryCodeList['BG'] = '359';

		countryCodeList['BF'] = '226';

		countryCodeList['BI'] = '257';

		countryCodeList['KH'] = '855';

		countryCodeList['CM'] = '237';

		countryCodeList['CA'] = '1';

		countryCodeList[''] = '238';

		countryCodeList['KY'] = '1';

		countryCodeList['CF'] = '236';

		countryCodeList['TD'] = '235';

		countryCodeList['CL'] = '56';

		countryCodeList['CN'] = '86';

		countryCodeList['CX'] = '';

		countryCodeList['CC'] = '';

		countryCodeList['CO'] = '57';

		countryCodeList['KM'] = '269';

		countryCodeList['CG'] = '242';

		countryCodeList['CD'] = '243';

		countryCodeList['CK'] = '682';

		countryCodeList['CR'] = '506';

		countryCodeList['CI'] = '225';

		countryCodeList['HR'] = '385';

		countryCodeList['CU'] = '53';

		countryCodeList['CY'] = '357';

		countryCodeList['CZ'] = '420';

		countryCodeList['DK'] = '45';

		countryCodeList['DJ'] = '253';

		countryCodeList['DM'] = '1';

		countryCodeList['DO'] = '1';

		countryCodeList['EC'] = '593';

		countryCodeList['EG'] = '20';

		countryCodeList['SV'] = '503';

		countryCodeList['GQ'] = '240';

		countryCodeList['ER'] = '291';

		countryCodeList['EE'] = '201';

		countryCodeList['ET'] = '251';

		countryCodeList['FK'] = '500';

		countryCodeList['FO'] = '298';

		countryCodeList['FJ'] = '679';

		countryCodeList['FI'] = '358';

		countryCodeList['FR'] = '33';

		countryCodeList['FX'] = '33';

		countryCodeList['GF'] = '594';

		countryCodeList['PF'] = '689';

		countryCodeList['TF'] = '33';

		countryCodeList['GA'] = '241';

		countryCodeList['GM'] = '220';

		countryCodeList['GE'] = '995';

		countryCodeList['DE'] = '49';

		countryCodeList['GG'] = '44';

		countryCodeList['GH'] = '233';

		countryCodeList['GI'] = '350';

		countryCodeList['GR'] = '30';

		countryCodeList['GL'] = '299';

		countryCodeList['GD'] = '1';

		countryCodeList['GP'] = '590';

		countryCodeList['GU'] = '1';

		countryCodeList['GT'] = '502';

		countryCodeList['GN'] = '224';

		countryCodeList['GW'] = '245';

		countryCodeList['GY'] = '592';

		countryCodeList['HT'] = '509';

		countryCodeList['HM'] = '1';

		countryCodeList['HN'] = '504';

		countryCodeList['HK'] = '852';

		countryCodeList['HU'] = '36';

		countryCodeList['IS'] = '354';

		countryCodeList['IN'] = '91';

		countryCodeList['ID'] = '62';

		countryCodeList['IR'] = '98';

		countryCodeList['IQ'] = '964';

		countryCodeList['IE'] = '353';

		countryCodeList['IL'] = '972';

		countryCodeList['IT'] = '39';

		countryCodeList['JM'] = '1';

		countryCodeList['JP'] = '81';

		countryCodeList['JO'] = '962';

		countryCodeList['KZ'] = '7';

		countryCodeList['KE'] = '254';

		countryCodeList['KI'] = '686';

		countryCodeList['KR'] = '82';

		countryCodeList['KP'] = '850';

		countryCodeList['KW'] = '965';

		countryCodeList['KG'] = '996';

		countryCodeList['LA'] = '856';

		countryCodeList['LV'] = '371';

		countryCodeList['LB'] = '961';

		countryCodeList['LS'] = '266';

		countryCodeList['LR'] = '231';

		countryCodeList['LY'] = '218';

		countryCodeList['LI'] = '423';

		countryCodeList['LT'] = '370';

		countryCodeList['LU'] = '352';

		countryCodeList['MO'] = '853';

		countryCodeList['MK'] = '389';

		countryCodeList['MG'] = '261';

		countryCodeList['MW'] = '265';

		countryCodeList['MY'] = '60';

		countryCodeList['MV'] = '960';

		countryCodeList['ML'] = '223';

		countryCodeList['MT'] = '356';

		countryCodeList['MH'] = '692';

		countryCodeList['MQ'] = '596';

		countryCodeList['MR'] = '222';

		countryCodeList['MU'] = '230';

		countryCodeList['YT'] = '269';

		countryCodeList['MX'] = '52';

		countryCodeList['FM'] = '691';

		countryCodeList['MD'] = '373';

		countryCodeList['MC'] = '377';

		countryCodeList['MN'] = '976';

		countryCodeList['ME'] = '382';

		countryCodeList['MS'] = '1';

		countryCodeList['MA'] = '212';

		countryCodeList['MZ'] = '258';

		countryCodeList['MM'] = '95';

		countryCodeList['NA'] = '264';

		countryCodeList['NR'] = '674';

		countryCodeList['NP'] = '977';

		countryCodeList['NL'] = '31';

		countryCodeList['AN'] = '599';

		countryCodeList['NC'] = '687';

		countryCodeList['NZ'] = '64';

		countryCodeList['NI'] = '505';

		countryCodeList['NE'] = '227';

		countryCodeList['NG'] = '234';

		countryCodeList['NU'] = '683';

		countryCodeList['NF'] = '6723';

		countryCodeList['MP'] = '1';

		countryCodeList['NO'] = '47';

		countryCodeList['OM'] = '968';

		countryCodeList['PK'] = '92';

		countryCodeList['PW'] = '680';

		countryCodeList['PS'] = '970';

		countryCodeList['PA'] = '507';

		countryCodeList['PG'] = '675';

		countryCodeList['PY'] = '595';

		countryCodeList['PE'] = '51';

		countryCodeList['PH'] = '63';

		countryCodeList['PN'] = '870';

		countryCodeList['PL'] = '48';

		countryCodeList['PT'] = '351';

		countryCodeList['PR'] = '1';

		countryCodeList['QA'] = '974';

		countryCodeList['RE'] = '262';

		countryCodeList['RO'] = '40';

		countryCodeList['RU'] = '7';

		countryCodeList['RW'] = '250';

		countryCodeList['SH'] = '290';

		countryCodeList['KN'] = '1';

		countryCodeList['LC'] = '1';

		countryCodeList['PM'] = '508';

		countryCodeList['VC'] = '1';

		countryCodeList['WS'] = '685';

		countryCodeList['SM'] = '378';

		countryCodeList['ST'] = '239';

		countryCodeList['SA'] = '966';

		countryCodeList['SN'] = '221';

		countryCodeList['RS'] = '381';

		countryCodeList['SC'] = '248';

		countryCodeList['SL'] = '232';

		countryCodeList['SG'] = '65';

		countryCodeList['SK'] = '421';

		countryCodeList['SI'] = '386';

		countryCodeList['SB'] = '677';

		countryCodeList['SO'] = '252';

		countryCodeList['ZA'] = '27';

		countryCodeList['GS'] = '44';

		countryCodeList['ES'] = '34';

		countryCodeList['LK'] = '94';

		countryCodeList['SD'] = '249';

		countryCodeList['SR'] = '597';

		countryCodeList['SJ'] = '79';

		countryCodeList['SZ'] = '268';

		countryCodeList['SE'] = '46';

		countryCodeList['CH'] = '41';

		countryCodeList['SY'] = '963';

		countryCodeList['TW'] = '886';

		countryCodeList['TJ'] = '992';

		countryCodeList['TZ'] = '255';

		countryCodeList['TH'] = '66';

		countryCodeList['TL'] = '670';

		countryCodeList['TG'] = '228';

		countryCodeList['TK'] = '690';

		countryCodeList['TO'] = '676';

		countryCodeList['TT'] = '1';

		countryCodeList['TN'] = '216';

		countryCodeList['TR'] = '90';

		countryCodeList['TM'] = '993';

		countryCodeList['TC'] = '1';

		countryCodeList['TV'] = '688';

		countryCodeList['UG'] = '256';

		countryCodeList['UA'] = '380';

		countryCodeList['AE'] = '971';

		countryCodeList['GB'] = '44';

		countryCodeList['US'] = '1';

		countryCodeList['UM'] = '1';

		countryCodeList['UY'] = '598';

		countryCodeList['UZ'] = '998';

		countryCodeList['VU'] = '678';

		countryCodeList['VA'] = '39';

		countryCodeList['VE'] = '58';

		countryCodeList['VN'] = '84';

		countryCodeList['VG'] = '1284';

		countryCodeList['VI'] = '1340';

		countryCodeList['WF'] = '681';

		countryCodeList['EH'] = '212';

		countryCodeList['YE'] = '967';

		countryCodeList['ZM'] = '260';

		countryCodeList['ZW'] = '263';

		

		return countryCodeList[countryCode];



	}	

</script>

  </body>

</html>



<?php

wp_reset_query();

?>

<?php

 //get_footer();

?>