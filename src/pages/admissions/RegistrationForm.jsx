/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Loader2,
  CheckCircle2,
} from "lucide-react";
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
import { State, City } from "@/utils/stateCity";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Fetch CSRF token from server when component mounts
  useEffect(() => {
    fetchCSRFToken();
    // Initialize states based on default country (India)
    const statesData = State.getStatesOfCountry("IN");
    setStates(statesData);
  }, []);

  // Fetch states when country changes (if country selection is dynamic in the future)
  useEffect(() => {
    if (formData.country) {
      const statesData = State.getStatesOfCountry("IN"); // Assuming countryCode "IN" for India
      setStates(statesData);
      setFormData((prev) => ({ ...prev, state: "", city: "" }));
      setCities([]);
    }
  }, [formData.country]);

  // Fetch cities when state changes
  useEffect(() => {
    if (formData.state) {
      const selectedState = states.find(
        (state) => state.name === formData.state
      );
      if (selectedState) {
        const citiesData = City.getCitiesOfState("IN", selectedState.isoCode);
        setCities(citiesData);
      }
    } else {
      setCities([]);
    }
  }, [formData.state, states]);

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
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
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
        // Country is hardcoded to India, no validation needed

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
        setIsSubmitting(true);
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
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseText = await response.text();

        // Check if response contains PHP error
        if (
          responseText.includes("Fatal error") ||
          responseText.includes("Warning")
        ) {
          throw new Error("Server error occurred. Please try again later.");
        }

        // Show success state briefly before redirecting
        setIsSuccess(true);

        // Continue with the rest of your form submission logic...
        const parser = new DOMParser();
        const doc = parser.parseFromString(responseText, "text/html");
        const paymentForm = doc.querySelector('form[name="cbs_payment"]');

        if (!paymentForm) {
          console.error("Full response:", responseText);
          throw new Error("Payment form not found in response");
        }

        // Extract billing_city and billing_state from the paymentForm
        const billingCity = paymentForm.querySelector(
          'input[name="billing_city"]'
        ).value;
        const billingState = paymentForm.querySelector(
          'input[name="billing_state"]'
        ).value;

        // Create the actual form to submit
        const form = document.createElement("form");
        form.method = "post";
        form.action =
          "https://www.colbrownschool.com/ccavenue/ccavRequestHandler.php";
        form.name = "cbs_payment";
        form.style.display = "none";

        // Set transaction ID
        const tid = new Date().getTime().toString();

        // Required payment form fields
        const formFields = {
          tid: tid,
          merchant_id: "23160",
          order_id: paymentForm.querySelector('input[name="order_id"]').value,
          amount: paymentForm.querySelector('input[name="amount"]').value,
          currency: "INR",
          redirect_url:
            "https://www.colbrownschool.com/ccavenue/ccavResponseHandler.php",
          cancel_url:
            "https://www.colbrownschool.com/ccavenue/ccavResponseHandler.php",
          language: "EN",
          billing_name: paymentForm.querySelector('input[name="billing_name"]')
            .value,
          billing_address: paymentForm.querySelector(
            'input[name="billing_address"]'
          ).value,
          billing_city: billingCity,
          billing_state: billingState,
          billing_zip: paymentForm.querySelector('input[name="billing_zip"]')
            .value,
          billing_country: paymentForm.querySelector(
            'input[name="billing_country"]'
          ).value,
          billing_tel: paymentForm.querySelector('input[name="billing_tel"]')
            .value,
          billing_email: paymentForm.querySelector(
            'input[name="billing_email"]'
          ).value,
          delivery_name: paymentForm.querySelector(
            'input[name="delivery_name"]'
          ).value,
          delivery_address: paymentForm.querySelector(
            'input[name="delivery_address"]'
          ).value,
          delivery_city: paymentForm.querySelector(
            'input[name="delivery_city"]'
          ).value,
          delivery_state: paymentForm.querySelector(
            'input[name="delivery_state"]'
          ).value,
          delivery_zip: paymentForm.querySelector('input[name="delivery_zip"]')
            .value,
          delivery_country: paymentForm.querySelector(
            'input[name="delivery_country"]'
          ).value,
          delivery_tel: paymentForm.querySelector('input[name="delivery_tel"]')
            .value,
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

        // Add form to body and submit
        document.body.appendChild(form);
        console.log("Submitting payment form...");
        form.submit();
      } catch (error) {
        console.error("Error submitting form:", error);
        alert(`Error: ${error.message}`);
      } finally {
        // Reset submission state if there was an error
        // (won't be reached if payment form submission is successful)
        setIsSubmitting(false);
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
            states={states}
            cities={cities}
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
        className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl relative"
        onKeyPress={handleKeyPress}
      >
        {(isSubmitting || isSuccess) && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-lg z-50">
            <div className="text-center space-y-4">
              {isSubmitting ? (
                <>
                  <Loader2 className="h-12 w-12 animate-spin text-green-950 mx-auto" />
                  <p className="text-green-950 font-medium">
                    Processing your registration...
                  </p>
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
                  <p className="text-green-950 font-medium">
                    Registration submitted successfully!
                  </p>
                  <p className="text-sm text-green-800">
                    Redirecting to payment...
                  </p>
                </>
              )}
            </div>
          </div>
        )}

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

const ContactInfo = ({
  formData,
  handleInputChange,
  errors,
  states,
  cities,
}) => (
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
        options={[{ name: "India" }]} // Only India is available
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
        onChange={handleInputChange}
        options={states.map((state) => ({
          name: state.name,
        }))}
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
        options={cities.map((city) => ({
          name: city.name,
        }))}
        required
        placeholder="Select city"
        error={errors.city}
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
        required
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
        options={["4th", "5th", "6th", "7th", "8th", "9th", "11th"].map(
          (cls) => ({ name: cls })
        )}
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
    <p className="mt-3 text-sm text-green-700   ">
      Note: For seamless registration, we recommend using a{" "}
      <span className="text-green-950 font-bold animate-pulse ">
        Credit Card and Net Banking
      </span>{" "}
      which ensures instant confirmation. Currently,{" "}
      <span className="text-red-500 font-bold animate-pulse">Debit Card</span>{" "}
      is payment method is not available.
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
  options,
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
      onValueChange={(val) => onChange(name, val)}
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
        {options.map((option, index) => (
          <SelectItem key={index} value={option.name}>
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
