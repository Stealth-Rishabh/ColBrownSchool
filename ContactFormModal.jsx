"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ContactFormModal({ setIsOpen }) {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    class: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const validateParentName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return "Parent's name should only contain letters and spaces";
    }
    return "";
  };

  const validateStudentName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return "Student's name should only contain letters and spaces";
    }
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return "Phone number must be 10 digits and start with 6-9";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate on change
    if (name === "parentName") {
      setErrors((prev) => ({ ...prev, parentName: validateParentName(value) }));
    }
    if (name === "studentName") {
      setErrors((prev) => ({
        ...prev,
        studentName: validateStudentName(value),
      }));
    }
    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }
    if (name === "phone") {
      setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const parentNameError = validateParentName(formData.parentName);
    const studentNameError = validateStudentName(formData.studentName);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const classError = formData.class ? "" : "Class is required";

    setErrors({
      parentName: parentNameError,
      studentName: studentNameError,
      email: emailError,
      phone: phoneError,
      class: classError,
    });

    if (
      parentNameError ||
      studentNameError ||
      emailError ||
      phoneError ||
      classError
    ) {
      return;
    }

    // Create FormData object with the expected field names
    const formDataToSend = new FormData();
    formDataToSend.append("contact-parent-name", formData.parentName);
    formDataToSend.append("contact-student-name", formData.studentName);
    formDataToSend.append("contact-email", formData.email);
    formDataToSend.append("contact-phone", formData.phone);
    formDataToSend.append("contact-class", formData.class);
    formDataToSend.append("contact-enquiry", formData.enquiry);

    try {
      const response = await fetch("https://www.bfis.in/BFIS/bfis_crm.php", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Form submission result:", result);

      if (result.success) {
        setFormData({
          parentName: "",
          studentName: "",
          email: "",
          phone: "",
          class: "",
          enquiry: "",
        });
        setIsOpen(false);
        navigate("/thankyou");
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  // Check if the modal should be visible based on the current page
  useEffect(() => {
    const currentPath = window.location.pathname;
    const restrictedPaths = ["/login", "/admin", "/thankyou", "/contact-us"];

    if (restrictedPaths.includes(currentPath)) {
      setIsOpen(false);
    }
  }, [setIsOpen]);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          <label
            htmlFor="parentName"
            className="block text-xs font-medium text-white"
          >
            Parent's Name
          </label>
          <input
            type="text"
            name="parentName"
            id="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-1.5 bg-gray-300 text-gray-800 border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
          />
          {errors.parentName && (
            <p className="mt-1 text-xs text-red-600">{errors.parentName}</p>
          )}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          <label
            htmlFor="studentName"
            className="block text-xs font-medium text-white"
          >
            Student's Name
          </label>
          <input
            type="text"
            name="studentName"
            id="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-1.5 bg-gray-300 text-gray-800 border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
          />
          {errors.studentName && (
            <p className="mt-1 text-xs text-red-600">{errors.studentName}</p>
          )}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          <label
            htmlFor="email"
            className="block text-xs font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-1.5 bg-gray-300 text-gray-800 border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          <label
            htmlFor="phone"
            className="block text-xs font-medium text-white"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-1.5 bg-gray-300 text-gray-800 border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
          )}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          <label
            htmlFor="class"
            className="block text-xs font-medium text-white"
          >
            Class
          </label>
          <select
            name="class"
            id="class"
            value={formData.class}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-5 py-3 bg-gray-300 text-gray-800 border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
          >
            <option value="">Select Class</option>
            {[
              "Pre-Nursery",
              "Nursery",
              "KG",
              "1st",
              "2nd",
              "3rd",
              "4th",
              "5th",
              "6th",
              "7th",
              "8th",
              "9th",
              "10th",
              "11th",
              "12th",
            ].map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          <label
            htmlFor="enquiry"
            className="block text-xs font-medium text-white"
          >
            Enquiry
          </label>
          <textarea
            name="enquiry"
            id="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            required
            rows="3"
            className="mt-1 block w-full px-3 py-1.5 bg-gray-300 text-gray-800 border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
          ></textarea>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          <button
            type="submit"
            className="w-full py-2 px-4 text-sm font-semibold text-white bg-[#FF5722] rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
        ></motion.div>
      </form>
    </motion.div>
  );
}
