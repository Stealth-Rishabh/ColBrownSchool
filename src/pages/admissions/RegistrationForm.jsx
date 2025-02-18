/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { State, City } from "country-state-city";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentname: "",
    dob: "",
    birthplace: "",
    fathername: "",
    nationality: "",
    occupation: "",
    country: "India",
    state: "",
    city: "",
    address: "",
    zipcode: "",
    contact_email: "",
    telephone: "",
    whatsapp_number: "",
    addmissionclass: "",
    agree: false,
    frmtoken: "",
  });
  const [errors, setErrors] = useState({});

  // Fetch CSRF token from server when component mounts
  useEffect(() => {
    fetchCSRFToken();
  }, []);

  const fetchCSRFToken = async () => {
    try {
      const response = await fetch(
        "https://www.colbrownschool.com/admissions/registration/",
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.ok) {
        const text = await response.text();
        // Parse the HTML to get the token
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const tokenInput = doc.querySelector('input[name="frmtoken"]');
        if (tokenInput) {
          setFormData((prev) => ({ ...prev, frmtoken: tokenInput.value }));
        } else {
          console.error("CSRF token not found in response");
        }
      } else {
        console.error("Failed to fetch CSRF token");
      }
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
    }
  };

  const handleInputChange = (name, value) => {
    console.log(`Updating ${name} with value:`, value); // Debug log
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    const validatePattern = (value, pattern, errorMessage) => {
      if (!new RegExp(pattern).test(value)) {
        return errorMessage;
      }
      return null;
    };

    switch (currentStep) {
      case 1: // Child Information
        if (!formData.studentname?.trim()) {
          newErrors.studentname = "Child's name is required";
        } else if (!/^[A-Za-z\s]{3,50}$/.test(formData.studentname)) {
          newErrors.studentname =
            "Name should only contain letters and spaces, between 3-50 characters";
        }

        if (!formData.dob) {
          newErrors.dob = "Date of birth is required";
        }

        if (!formData.birthplace?.trim()) {
          newErrors.birthplace = "Place of birth is required";
        } else if (
          validatePattern(
            formData.birthplace,
            "^[A-Za-z\\s,]{3,50}$",
            "Place should only contain letters, spaces and commas"
          )
        ) {
          newErrors.birthplace = validatePattern(
            formData.birthplace,
            "^[A-Za-z\\s,]{3,50}$",
            "Place should only contain letters, spaces and commas"
          );
        }
        break;

      case 2: // Parent Information
        if (!formData.fathername?.trim()) {
          newErrors.fathername = "Parent's name is required";
        } else if (
          validatePattern(
            formData.fathername,
            "^[A-Za-z\\s]{3,50}$",
            "Name should only contain letters and spaces, between 3-50 characters"
          )
        ) {
          newErrors.fathername = validatePattern(
            formData.fathername,
            "^[A-Za-z\\s]{3,50}$",
            "Name should only contain letters and spaces, between 3-50 characters"
          );
        }

        if (!formData.nationality?.trim()) {
          newErrors.nationality = "Nationality is required";
        }

        if (!formData.occupation?.trim()) {
          newErrors.occupation = "Occupation is required";
        }
        break;

      case 3: // Contact Information
        // Country is now "India", no validation needed

        // State validation for select field
        if (!formData.state) {
          newErrors.state = "Please select a state";
        }

        // City validation for select field
        if (!formData.city) {
          newErrors.city = "Please select a city";
        }

        // Address validation
        if (!formData.address?.trim()) {
          newErrors.address = "Address is required";
        } else if (formData.address.length < 10) {
          newErrors.address = "Address must be at least 10 characters long";
        }

        // Pin code validation
        if (!formData.zipcode?.trim()) {
          newErrors.zipcode = "Pin code is required";
        } else if (!/^[0-9]{6}$/.test(formData.zipcode)) {
          newErrors.zipcode = "Pin code must be exactly 6 digits";
        }

        // Email validation
        if (!formData.contact_email?.trim()) {
          newErrors.contact_email = "Email is required";
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            formData.contact_email
          )
        ) {
          newErrors.contact_email = "Please enter a valid email address";
        }

        // Phone validation
        if (!formData.telephone?.trim()) {
          newErrors.telephone = "Mobile number is required";
        } else if (!/^[6-9][0-9]{9}$/.test(formData.telephone)) {
          newErrors.telephone =
            "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9";
        }

        // WhatsApp validation (optional)
        if (
          formData.whatsapp_number?.trim() &&
          !/^[6-9][0-9]{9}$/.test(formData.whatsapp_number)
        ) {
          newErrors.whatsapp_number =
            "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9";
        }
        break;

      case 4: // Admission Information
        if (!formData.addmissionclass) {
          newErrors.addmissionclass = "Admission class is required";
        }

        if (!formData.agree) {
          newErrors.agree = "You must agree to the terms and conditions";
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateStep(step)) {
      try {
        // Create FormData object
        const submitData = new FormData();

        // Add all form fields
        Object.entries({
          studentname: formData.studentname,
          dob: formData.dob,
          birthplace: formData.birthplace,
          fathername: formData.fathername,
          nationality: formData.nationality,
          occupation: formData.occupation,
          country: formData.country || "India",
          state: formData.state,
          city: formData.city,
          address: formData.address,
          zipcode: formData.zipcode,
          contact_email: formData.contact_email,
          telephone: formData.telephone,
          whatsapp_number: formData.whatsapp_number,
          addmissionclass: formData.addmissionclass,
          agree: formData.agree ? "1" : "0",
          frmtoken: formData.frmtoken,
        }).forEach(([key, value]) => {
          submitData.append(key, value || "");
        });

        console.log("Submitting form data:", Object.fromEntries(submitData));

        const response = await fetch(
          "https://www.colbrownschool.com/ccavenue/paymentnew.php",
          {
            method: "POST",
            body: submitData,
            headers: {
              Accept: "text/html",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseText = await response.text();
        console.log("Response from server:", responseText); // Debug log

        // Check if response contains PHP error
        if (
          responseText.includes("Fatal error") ||
          responseText.includes("Warning") ||
          responseText.includes("Notice")
        ) {
          console.error("PHP Error:", responseText);
          throw new Error("Server error occurred. Please try again later.");
        }

        // Create a temporary div to parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(responseText, "text/html");
        const paymentForm = doc.querySelector('form[name="cbs_payment"]');

        if (!paymentForm) {
          console.error("Full response:", responseText);
          throw new Error("Payment form not found in response");
        }

        // Create the actual form to submit
        const form = document.createElement("form");
        form.method = "post";
        form.action =
          "https://www.colbrownschool.com/ccavenue/ccavRequestHandler.php";
        form.name = "cbs_payment";
        form.style.display = "none";

        // Set transaction ID
        const tid = new Date().getTime().toString();

        // Required payment form fields with proper error handling
        const formFields = {
          tid: tid,
          merchant_id: "23160",
          order_id:
            paymentForm.querySelector('input[name="order_id"]')?.value || "",
          amount:
            paymentForm.querySelector('input[name="amount"]')?.value || "",
          currency: "INR",
          redirect_url:
            "https://www.colbrownschool.com/ccavenue/ccavResponseHandler.php",
          cancel_url:
            "https://www.colbrownschool.com/ccavenue/ccavResponseHandler.php",
          language: "EN",
          billing_name:
            paymentForm.querySelector('input[name="billing_name"]')?.value ||
            formData.fathername,
          billing_address:
            paymentForm.querySelector('input[name="billing_address"]')?.value ||
            formData.address,
          billing_city:
            paymentForm.querySelector('input[name="billing_city"]')?.value ||
            formData.city,
          billing_state:
            paymentForm.querySelector('input[name="billing_state"]')?.value ||
            formData.state,
          billing_zip:
            paymentForm.querySelector('input[name="billing_zip"]')?.value ||
            formData.zipcode,
          billing_country:
            paymentForm.querySelector('input[name="billing_country"]')?.value ||
            formData.country,
          billing_tel:
            paymentForm.querySelector('input[name="billing_tel"]')?.value ||
            formData.telephone,
          billing_email:
            paymentForm.querySelector('input[name="billing_email"]')?.value ||
            formData.contact_email,
          delivery_name:
            paymentForm.querySelector('input[name="delivery_name"]')?.value ||
            formData.fathername,
          delivery_address:
            paymentForm.querySelector('input[name="delivery_address"]')
              ?.value || formData.address,
          delivery_city:
            paymentForm.querySelector('input[name="delivery_city"]')?.value ||
            formData.city,
          delivery_state:
            paymentForm.querySelector('input[name="delivery_state"]')?.value ||
            formData.state,
          delivery_zip:
            paymentForm.querySelector('input[name="delivery_zip"]')?.value ||
            formData.zipcode,
          delivery_country:
            paymentForm.querySelector('input[name="delivery_country"]')
              ?.value || formData.country,
          delivery_tel:
            paymentForm.querySelector('input[name="delivery_tel"]')?.value ||
            formData.telephone,
          merchant_param1: "",
          merchant_param2: "",
          merchant_param3: "",
          merchant_param4: "",
          merchant_param5: "",
          promo_code: "",
          customer_identifier: "",
        };

        // Add all fields to form
        Object.entries(formFields).forEach(([name, value]) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = name;
          input.value = value;
          form.appendChild(input);
        });

        // Debug log before submission
        console.log("Payment form fields:", formFields);

        // Add form to body and submit
        document.body.appendChild(form);
        console.log("Submitting payment form...");
        form.submit();
      } catch (error) {
        console.error("Error submitting form:", error);
        alert(`Error: ${error.message}`);
      }
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 4) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevStep = () => setStep(step - 1);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (step < 4) {
        handleNext();
      } else {
        handleSubmit();
      }
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ChildInfo
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <ParentInfo
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <ContactInfo
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );
      case 4:
        return (
          <AdmissionInfo
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-green-950 flex items-center justify-center p-4 sm:py-24 py-16">
      <div
        className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl"
        onKeyPress={handleKeyPress}
      >
        <h1 className="text-3xl font-bold text-center text-green-950 mb-6">
          School Registration
        </h1>
        <p className="text-center text-green-800 mb-8">
          Welcome to our online registration form. Please fill in the details
          below to register your child. If you have any questions, please{" "}
          <a href="#" className="text-green-600 hover:underline">
            contact us
          </a>
          .
        </p>

        <div className="mb-8">
          <ProgressBar currentStep={step} totalSteps={4} />
        </div>

        {renderStep()}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <Button
              onClick={handlePrevStep}
              variant="outline"
              className="flex items-center"
            >
              <ChevronLeft className="mr-2" size={18} />
              Previous
            </Button>
          )}
          <Button
            onClick={handleNext}
            className="flex items-center ml-auto bg-green-950 hover:bg-green-900"
          >
            {step < 4 ? (
              <>
                Next
                <ChevronRight className="ml-2" size={18} />
              </>
            ) : (
              <>
                Submit
                <Check className="ml-2" size={18} />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-between">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index < currentStep
                ? "bg-green-950 animate-pulse text-white"
                : "bg-green-100 text-green-800"
            }`}
          >
            {index + 1}
          </div>
          <div className="text-xs mt-1 text-green-800">
            {index === 0
              ? "Child"
              : index === 1
              ? "Parent"
              : index === 2
              ? "Contact"
              : "Admission"}
          </div>
        </div>
      ))}
    </div>
  );
};

const ChildInfo = ({ formData, handleInputChange, errors }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-green-950">
      Child Information
    </h2>
    <div className="space-y-4">
      <InputField
        label="Full Name of Boy"
        name="studentname"
        value={formData.studentname || ""}
        onChange={handleInputChange}
        required
        placeholder="Enter child's full name"
        pattern="^[A-Za-z\s]{3,50}$"
        title="Name should only contain letters and spaces, between 3-50 characters"
        error={errors.studentname}
      />
      <InputField
        label="Date of Birth"
        name="dob"
        type="date"
        value={formData.dob || ""}
        onChange={handleInputChange}
        required
        max={new Date().toISOString().split("T")[0]}
        min="2005-01-01"
        error={errors.dob}
      />
      <InputField
        label="Place of Birth"
        name="birthplace"
        value={formData.birthplace || ""}
        onChange={handleInputChange}
        required
        placeholder="Enter place of birth"
        pattern="^[A-Za-z\s,]{3,50}$"
        title="Place should only contain letters, spaces and commas"
        error={errors.birthplace}
      />
    </div>
  </div>
);

const ParentInfo = ({ formData, handleInputChange, errors }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-green-950">
      Father/Guardian Information
    </h2>
    <div className="space-y-4">
      <InputField
        label="Full Name"
        name="fathername"
        value={formData.fathername || ""}
        onChange={handleInputChange}
        required
        placeholder="Enter parent's full name"
        pattern="^[A-Za-z\s]{3,50}$"
        title="Name should only contain letters and spaces, between 3-50 characters"
        error={errors.fathername}
      />
      <InputField
        label="Nationality"
        name="nationality"
        value={formData.nationality || ""}
        onChange={handleInputChange}
        placeholder="Enter nationality"
        pattern="^[A-Za-z\s]{3,30}$"
        title="Nationality should only contain letters and spaces"
        error={errors.nationality}
      />
      <InputField
        label="Occupation"
        name="occupation"
        value={formData.occupation || ""}
        onChange={handleInputChange}
        placeholder="Enter occupation"
        pattern="^[A-Za-z\s]{3,30}$"
        title="Occupation should only contain letters and spaces"
        error={errors.occupation}
      />
    </div>
  </div>
);

const ContactInfo = ({ formData, handleInputChange, errors }) => {
  // Get all states of India
  const states = State.getStatesOfCountry("IN").map((state) => ({
    id: state.name,
    name: state.name,
    isoCode: state.isoCode,
  }));

  // Get cities based on selected state's isoCode
  const selectedState = states.find((s) => s.name === formData.state);
  const cities = selectedState
    ? City.getCitiesOfState("IN", selectedState.isoCode).map((city) => ({
        id: city.name,
        name: city.name,
      }))
    : [];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-green-950">
        Contact Information
      </h2>
      <div className="space-y-4">
        {/* Country - Hardcoded to India */}
        <SelectField
          label="Country"
          name="country"
          value="India"
          onChange={handleInputChange}
          options={[{ id: "India", name: "India" }]}
          required
          disabled={true}
          placeholder="Select country"
          error={errors.country}
        />

        {/* State */}
        <SelectField
          label="State"
          name="state"
          value={formData.state || ""}
          onChange={(name, value) => {
            handleInputChange(name, value);
            // Reset city when state changes
            handleInputChange("city", "");
          }}
          options={states}
          required
          placeholder="Select state"
          error={errors.state}
        />

        {/* City */}
        <SelectField
          label="City"
          name="city"
          value={formData.city || ""}
          onChange={handleInputChange}
          options={cities}
          required
          placeholder="Select city"
          error={errors.city}
          disabled={!formData.state}
        />

        <TextAreaField
          label="Permanent Address"
          name="address"
          value={formData.address || ""}
          onChange={handleInputChange}
          required
          placeholder="Enter your complete address"
          minLength={10}
          maxLength={200}
          error={errors.address}
        />
        <InputField
          label="Pin Code"
          name="zipcode"
          value={formData.zipcode || ""}
          onChange={handleInputChange}
          requiredy
          placeholder="Enter 6-digit pin code"
          pattern="^[0-9]{6}$"
          title="Pin code must be exactly 6 digits"
          error={errors.zipcode}
        />
        <InputField
          label="Email"
          name="contact_email"
          type="email"
          value={formData.contact_email || ""}
          onChange={handleInputChange}
          required
          placeholder="Enter your email address"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
          error={errors.contact_email}
        />
        <InputField
          label="Mobile Number"
          name="telephone"
          value={formData.telephone || ""}
          onChange={handleInputChange}
          required
          placeholder="Enter 10-digit mobile number (e.g., 9876543210)"
          pattern="^[6-9][0-9]{9}$"
          title="Please enter a valid Indian mobile number starting with 6, 7, 8, or 9"
          prefix="+91"
          error={errors.telephone}
        />
        <InputField
          label="WhatsApp Number"
          name="whatsapp_number"
          value={formData.whatsapp_number || ""}
          onChange={handleInputChange}
          placeholder="Enter 10-digit WhatsApp number (e.g., 9876543210)"
          pattern="^[6-9][0-9]{9}$"
          title="Please enter a valid Indian mobile number starting with 6, 7, 8, or 9"
          prefix="+91"
          error={errors.whatsapp_number}
        />
      </div>
    </div>
  );
};

const AdmissionInfo = ({ formData, handleInputChange, errors }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-green-950">
      Admission Information
    </h2>
    <div className="space-y-4">
      <SelectField
        label="Year and class in which admission is desired"
        name="addmissionclass"
        value={formData.addmissionclass || ""}
        onChange={handleInputChange}
        options={[
          { id: "4th", name: "4th" },
          { id: "5th", name: "5th" },
          { id: "6th", name: "6th" },
          { id: "7th", name: "7th" },
          { id: "8th", name: "8th" },
          { id: "9th", name: "9th" },
          { id: "11th", name: "11th" },
        ]}
        required
        error={errors.addmissionclass}
      />
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="agree"
            checked={formData.agree || false}
            onCheckedChange={(checked) => handleInputChange("agree", checked)}
            className={errors.agree ? "border-red-500" : ""}
          />
          <label htmlFor="agree" className="text-sm text-green-800">
            I agree to the{" "}
            <a href="#" className="text-green-600 hover:underline">
              terms & conditions
            </a>
            . <span className="text-red-500">*</span>
          </label>
        </div>
        {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}
      </div>
    </div>
    <p className="mt-6 text-sm text-green-700">
      Note: By registering, you agree to abide by the Rules and Regulations of
      the School, pay the fees in advance, and settle any other accounts
      promptly.
    </p>
  </div>
);

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  prefix,
  placeholder,
  pattern,
  title,
  min,
  max,
  error,
}) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="text-green-800">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <div className="relative">
      {prefix && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-green-600 sm:text-sm">{prefix}</span>
        </div>
      )}
      <Input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        required={required}
        className={`${prefix ? "pl-12" : ""} ${error ? "border-red-500" : ""}`}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        min={min}
        max={max}
      />
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options = [], // Add default empty array
  required,
  placeholder,
  error,
  disabled = false,
}) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="text-green-800">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <Select
      value={value}
      onValueChange={(value) => onChange(name, value)}
      disabled={disabled}
    >
      <SelectTrigger
        className={`${error ? "border-red-500" : ""} ${
          disabled ? "bg-gray-100" : ""
        }`}
      >
        <SelectValue placeholder={placeholder || `Select ${label}`} />
      </SelectTrigger>
      <SelectContent>
        {Array.isArray(options) &&
          options.map((option) => (
            <SelectItem key={option.id || option.name} value={option.name}>
              {option.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  required,
  placeholder,
  minLength,
  maxLength,
  error,
}) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="text-green-800">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <Textarea
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      required={required}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      className={error ? "border-red-500" : ""}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default RegistrationForm;
