import React, { useState } from "react";
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

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
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
        if (!formData.childName?.trim()) {
          newErrors.childName = "Child's name is required";
        } else if (validatePattern(formData.childName, "^[A-Za-z\\s]{3,50}$", "Name should only contain letters and spaces, between 3-50 characters")) {
          newErrors.childName = validatePattern(formData.childName, "^[A-Za-z\\s]{3,50}$", "Name should only contain letters and spaces, between 3-50 characters");
        }
        if (!formData.dob) {
          newErrors.dob = "Date of birth is required";
        }
        if (!formData.birthPlace?.trim()) {
          newErrors.birthPlace = "Place of birth is required";
        } else if (validatePattern(formData.birthPlace, "^[A-Za-z\\s,]{3,50}$", "Place should only contain letters, spaces and commas")) {
          newErrors.birthPlace = validatePattern(formData.birthPlace, "^[A-Za-z\\s,]{3,50}$", "Place should only contain letters, spaces and commas");
        }
        break;

      case 2: // Parent Information
        if (!formData.parentName?.trim()) {
          newErrors.parentName = "Parent's name is required";
        } else if (validatePattern(formData.parentName, "^[A-Za-z\\s]{3,50}$", "Name should only contain letters and spaces, between 3-50 characters")) {
          newErrors.parentName = validatePattern(formData.parentName, "^[A-Za-z\\s]{3,50}$", "Name should only contain letters and spaces, between 3-50 characters");
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
        } else if (validatePattern(formData.city, "^[A-Za-z\\s]{2,30}$", "City should only contain letters and spaces")) {
          newErrors.city = validatePattern(formData.city, "^[A-Za-z\\s]{2,30}$", "City should only contain letters and spaces");
        }
        if (!formData.address?.trim()) {
          newErrors.address = "Address is required";
        } else if (formData.address.length < 10) {
          newErrors.address = "Address must be at least 10 characters long";
        }
        if (!formData.pinCode?.trim()) {
          newErrors.pinCode = "Pin code is required";
        } else if (validatePattern(formData.pinCode, "^[0-9]{6}$", "Pin code must be exactly 6 digits")) {
          newErrors.pinCode = validatePattern(formData.pinCode, "^[0-9]{6}$", "Pin code must be exactly 6 digits");
        }
        if (!formData.email?.trim()) {
          newErrors.email = "Email is required";
        } else if (validatePattern(formData.email, "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "Please enter a valid email address")) {
          newErrors.email = validatePattern(formData.email, "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "Please enter a valid email address");
        }
        if (!formData.mobile?.trim()) {
          newErrors.mobile = "Mobile number is required";
        } else if (validatePattern(formData.mobile, "^[6-9][0-9]{9}$", "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9")) {
          newErrors.mobile = validatePattern(formData.mobile, "^[6-9][0-9]{9}$", "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9");
        }
        if (formData.whatsapp?.trim() && validatePattern(formData.whatsapp, "^[6-9][0-9]{9}$", "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9")) {
          newErrors.whatsapp = validatePattern(formData.whatsapp, "^[6-9][0-9]{9}$", "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9");
        }
        break;

      case 4: // Admission Information
        if (!formData.admissionClass) {
          newErrors.admissionClass = "Admission class is required";
        }
        if (!formData.terms) {
          newErrors.terms = "You must agree to the terms and conditions";
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
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl">
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
              onClick={() => console.log("Form submitted:", formData)}
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
        name="childName"
        value={formData.childName || ""}
        onChange={handleInputChange}
        required
        placeholder="Enter child's full name"
        pattern="^[A-Za-z\s]{3,50}$"
        title="Name should only contain letters and spaces, between 3-50 characters"
        error={errors.childName}
      />
      <InputField
        label="Date of Birth"
        name="dob"
        type="date"
        value={formData.dob || ""}
        onChange={handleInputChange}
        required
        max={new Date().toISOString().split('T')[0]}
        min="2005-01-01"
        error={errors.dob}
      />
      <InputField
        label="Place of Birth"
        name="birthPlace"
        value={formData.birthPlace || ""}
        onChange={handleInputChange}
        required
        placeholder="Enter place of birth"
        pattern="^[A-Za-z\s,]{3,50}$"
        title="Place should only contain letters, spaces and commas"
        error={errors.birthPlace}
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
        name="parentName"
        value={formData.parentName || ""}
        onChange={handleInputChange}
        required
        placeholder="Enter parent's full name"
        pattern="^[A-Za-z\s]{3,50}$"
        title="Name should only contain letters and spaces, between 3-50 characters"
        error={errors.parentName}
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
        name="pinCode"
        value={formData.pinCode || ""}
        onChange={handleInputChange}
        required
        placeholder="Enter 6-digit pin code"
        pattern="^[0-9]{6}$"
        title="Pin code must be exactly 6 digits"
        error={errors.pinCode}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email || ""}
        onChange={handleInputChange}
        required
        placeholder="Enter your email address"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        title="Please enter a valid email address"
        error={errors.email}
      />
      <InputField
        label="Mobile Number"
        name="mobile"
        value={formData.mobile || ""}
        onChange={handleInputChange}
        required
        placeholder="Enter 10-digit mobile number (e.g., 9876543210)"
        pattern="^[6-9][0-9]{9}$"
        title="Please enter a valid Indian mobile number starting with 6, 7, 8, or 9"
        prefix="+91"
        error={errors.mobile}
      />
      <InputField
        label="WhatsApp Number"
        name="whatsapp"
        value={formData.whatsapp || ""}
        onChange={handleInputChange}
        placeholder="Enter 10-digit WhatsApp number (e.g., 9876543210)"
        pattern="^[6-9][0-9]{9}$"
        title="Please enter a valid Indian mobile number starting with 6, 7, 8, or 9"
        prefix="+91"
        error={errors.whatsapp}
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
        name="admissionClass"
        value={formData.admissionClass || ""}
        onChange={handleInputChange}
        options={["Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 11",]}
        required
        error={errors.admissionClass}
      />
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={formData.terms || false}
          onCheckedChange={(checked) => handleInputChange("terms", checked)}
        />
        <label htmlFor="terms" className="text-sm text-green-800">
          I agree to the{" "}
          <a href="#" className="text-green-600 hover:underline">
            terms & conditions
          </a>
          .
        </label>
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

const SelectField = ({ label, name, value, onChange, options, required, placeholder, error }) => (
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

const TextAreaField = ({ label, name, value, onChange, required, placeholder, minLength, maxLength, error }) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="text-green-800">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <Textarea
      id={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      required={required}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default RegistrationForm;
