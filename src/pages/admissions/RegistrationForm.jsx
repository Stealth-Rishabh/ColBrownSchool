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

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ChildInfo
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <ParentInfo
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <ContactInfo
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 4:
        return (
          <AdmissionInfo
            formData={formData}
            handleInputChange={handleInputChange}
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

const ChildInfo = ({ formData, handleInputChange }) => (
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
      />
      <InputField
        label="Date of Birth"
        name="dob"
        type="date"
        value={formData.dob || ""}
        onChange={handleInputChange}
        required
      />
      <InputField
        label="Place of Birth"
        name="birthPlace"
        value={formData.birthPlace || ""}
        onChange={handleInputChange}
        required
      />
    </div>
  </div>
);

const ParentInfo = ({ formData, handleInputChange }) => (
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
      />
      <InputField
        label="Nationality"
        name="nationality"
        value={formData.nationality || ""}
        onChange={handleInputChange}
      />
      <InputField
        label="Occupation"
        name="occupation"
        value={formData.occupation || ""}
        onChange={handleInputChange}
      />
    </div>
  </div>
);

const ContactInfo = ({ formData, handleInputChange }) => (
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
      />
      <InputField
        label="City"
        name="city"
        value={formData.city || ""}
        onChange={handleInputChange}
        required
      />
      <TextAreaField
        label="Permanent Address"
        name="address"
        value={formData.address || ""}
        onChange={handleInputChange}
        required
      />
      <InputField
        label="Pin Code"
        name="pinCode"
        value={formData.pinCode || ""}
        onChange={handleInputChange}
        required
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email || ""}
        onChange={handleInputChange}
        required
      />
      <InputField
        label="Mobile Number"
        name="mobile"
        value={formData.mobile || ""}
        onChange={handleInputChange}
        required
        prefix="+91"
      />
      <InputField
        label="WhatsApp Number"
        name="whatsapp"
        value={formData.whatsapp || ""}
        onChange={handleInputChange}
        prefix="+91"
      />
    </div>
  </div>
);

const AdmissionInfo = ({ formData, handleInputChange }) => (
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
        options={["Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"]}
        required
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
        className={prefix ? "pl-12" : ""}
      />
    </div>
  </div>
);

const SelectField = ({ label, name, value, onChange, options, required }) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="text-green-800">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <Select value={value} onValueChange={(value) => onChange(name, value)}>
      <SelectTrigger>
        <SelectValue placeholder={`Select ${label}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

const TextAreaField = ({ label, name, value, onChange, required }) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="text-green-800">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <Textarea
      id={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      required={required}
    />
  </div>
);

export default RegistrationForm;
