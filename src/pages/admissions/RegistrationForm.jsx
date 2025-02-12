/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
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
import ReCAPTCHA from "react-google-recaptcha";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentname: "",
    dob: "",
    birthplace: "",
    fathername: "",
    nationality: "",
    occupation: "",
    country: "",
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
    "g-recaptcha-response": "",
  });
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");

  // Fetch CSRF token from server when component mounts
  useEffect(() => {
    fetchCSRFToken();
  }, []);

  const fetchCSRFToken = async () => {
    try {
      const response = await fetch("/path-to-fetch-csrf-token", {
        method: "GET",
        credentials: "include", // Include cookies if required
      });
      if (response.ok) {
        const data = await response.json();
        setFormData((prev) => ({ ...prev, frmtoken: data.token }));
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
        } else if (
          validatePattern(
            formData.studentname,
            "^[A-Za-z\\s]{3,50}$",
            "Name should only contain letters and spaces, between 3-50 characters"
          )
        ) {
          newErrors.studentname = validatePattern(
            formData.studentname,
            "^[A-Za-z\\s]{3,50}$",
            "Name should only contain letters and spaces, between 3-50 characters"
          );
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
        if (!formData.country) {
          newErrors.country = "Country is required";
        }

        if (!formData.state) {
          newErrors.state = "State is required";
        }

        if (!formData.city?.trim()) {
          newErrors.city = "City is required";
        } else if (
          validatePattern(
            formData.city,
            "^[A-Za-z\\s]{2,30}$",
            "City should only contain letters and spaces"
          )
        ) {
          newErrors.city = validatePattern(
            formData.city,
            "^[A-Za-z\\s]{2,30}$",
            "City should only contain letters and spaces"
          );
        }

        if (!formData.address?.trim()) {
          newErrors.address = "Address is required";
        } else if (formData.address.length < 10) {
          newErrors.address = "Address must be at least 10 characters long";
        }

        if (!formData.zipcode?.trim()) {
          newErrors.zipcode = "Pin code is required";
        } else if (
          validatePattern(
            formData.zipcode,
            "^[0-9]{6}$",
            "Pin code must be exactly 6 digits"
          )
        ) {
          newErrors.zipcode = validatePattern(
            formData.zipcode,
            "^[0-9]{6}$",
            "Pin code must be exactly 6 digits"
          );
        }

        if (!formData.contact_email?.trim()) {
          newErrors.contact_email = "Email is required";
        } else if (
          validatePattern(
            formData.contact_email,
            "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
            "Please enter a valid email address"
          )
        ) {
          newErrors.contact_email = validatePattern(
            formData.contact_email,
            "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
            "Please enter a valid email address"
          );
        }

        if (!formData.telephone?.trim()) {
          newErrors.telephone = "Mobile number is required";
        } else if (
          validatePattern(
            formData.telephone,
            "^[6-9][0-9]{9}$",
            "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9"
          )
        ) {
          newErrors.telephone = validatePattern(
            formData.telephone,
            "^[6-9][0-9]{9}$",
            "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9"
          );
        }

        if (formData.whatsapp_number?.trim()) {
          if (
            validatePattern(
              formData.whatsapp_number,
              "^[6-9][0-9]{9}$",
              "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9"
            )
          ) {
            newErrors.whatsapp_number = validatePattern(
              formData.whatsapp_number,
              "^[6-9][0-9]{9}$",
              "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9"
            );
          }
        }
        break;

      case 4: // Admission Information
        if (!formData.addmissionclass) {
          newErrors.addmissionclass = "Admission class is required";
        }

        if (!formData.agree) {
          newErrors.agree = "You must agree to the terms and conditions";
        }

        if (!formData["g-recaptcha-response"]) {
          newErrors["g-recaptcha-response"] = "Please complete the reCAPTCHA";
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => setStep(step - 1);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (step < 4) {
        handleNextStep();
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = async () => {
    if (validateStep(step)) {
      try {
        const submitData = new FormData();

        // Append all form fields
        Object.entries(formData).forEach(([key, value]) => {
          submitData.append(key, value);
        });

        const response = await fetch(
          "https://www.colbrownschool.com/ccavenue/paymentnew.php",
          {
            method: "POST",
            body: submitData,
            credentials: "include", // Include cookies if needed
          }
        );

        if (response.ok) {
          const result = await response.text(); // Or response.json() if server returns JSON
          console.log("Form submission successful:", result);
          alert("Form submitted successfully!");
          // Optionally, reset the form or redirect the user
        } else {
          const errorText = await response.text();
          console.error("Form submission failed:", errorText);
          alert("There was an error submitting the form. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
      }
    }
  };

  const onRecaptchaChange = (token) => {
    setCaptchaToken(token);
    handleInputChange("g-recaptcha-response", token);
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
            onRecaptchaChange={onRecaptchaChange}
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
          {step < 4 ? (
            <Button
              onClick={handleNextStep}
              className="flex items-center ml-auto bg-green-950 hover:bg-green-900"
            >
              Next
              <ChevronRight className="ml-2" size={18} />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="flex items-center ml-auto bg-green-600 hover:bg-green-700"
            >
              Submit
              <Check className="ml-2" size={18} />
            </Button>
          )}
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

const ContactInfo = ({ formData, handleInputChange, errors }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-green-950">
      Contact Information
    </h2>
    <div className="space-y-4">
      <SelectField
        label="Country"
        name="country"
        value={formData.country || ""}
        onChange={handleInputChange}
        options={["India", "Other"]}
        required
        placeholder="Select your country"
        error={errors.country}
      />
      <SelectField
        label="State"
        name="state"
        value={formData.state || ""}
        onChange={handleInputChange}
        options={[
          "Andaman and Nicobar Islands",
          "Andhra Pradesh",
          "Arunachal Pradesh",
          "Other",
        ]}
        required
        placeholder="Select your state"
        error={errors.state}
      />
      <InputField
        label="City"
        name="city"
        value={formData.city || ""}
        onChange={handleInputChange}
        required
        placeholder="Enter your city"
        pattern="^[A-Za-z\s]{2,30}$"
        title="City should only contain letters and spaces"
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

const AdmissionInfo = ({
  formData,
  handleInputChange,
  errors,
  onRecaptchaChange,
}) => (
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
        options={["4th", "5th", "6th", "7th", "8th", "9th", "11th"]}
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
      {/* reCAPTCHA */}
      <div className="my-4">
        <ReCAPTCHA
          sitekey="6LftoiwUAAAAABnCMVn9JNpKHWE9YbhveZtdg34n"
          onChange={onRecaptchaChange}
        />
        {errors["g-recaptcha-response"] && (
          <p className="text-red-500 text-sm">
            {errors["g-recaptcha-response"]}
          </p>
        )}
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
  options,
  required,
  placeholder,
  error,
}) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="text-green-800">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <Select value={value} onValueChange={(value) => onChange(name, value)}>
      <SelectTrigger className={error ? "border-red-500" : ""}>
        <SelectValue placeholder={placeholder || `Select ${label}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
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
