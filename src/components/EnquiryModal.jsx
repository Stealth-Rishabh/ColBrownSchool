"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Country, State, City } from "country-state-city";

export function EnquiryModal() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    class: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Fetch Indian states using country-state-city
  useEffect(() => {
    const indianStates = State.getStatesOfCountry("IN");
    setStates(indianStates);
  }, []);

  // Fetch cities when a state is selected
  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedState) {
        setCities([]);
        return;
      }
      setIsLoading(true);
      try {
        const fetchedCities = City.getCitiesOfState("IN", selectedState);
        setCities(fetchedCities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, [selectedState]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Create FormData object with the expected field names for CRM
    const formDataToSend = new FormData();
    formDataToSend.append("contact-parent-name", formData.name);
    formDataToSend.append("contact-student-name", formData.name); // Using same name for both fields
    formDataToSend.append("contact-email", formData.email);
    formDataToSend.append("contact-phone", formData.phone);
    formDataToSend.append("contact-state", formData.state); // Add state
    formDataToSend.append("contact-city", formData.city); // Add city
    formDataToSend.append("contact-class", formData.class);
    formDataToSend.append("contact-enquiry", formData.message);
    formDataToSend.append("referrer_name", window.location.href);
    formDataToSend.append("keyword", "");
    formDataToSend.append("source", "website");
    formDataToSend.append("orderid", "1049");
    formDataToSend.append("sitename", "colNewWebsite");
    formDataToSend.append("campaign_url", window.location.href);
    formDataToSend.append("campaign_name", "");
    formDataToSend.append("network", "");

    try {
      const response = await fetch(
        "https://www.colbrownschool.com/CRM/colbrown_crm.php",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Form submission result:", result);

      if (result.success) {
        // Reset form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          class: "",
          message: "",
        });
        setSelectedState(""); // Reset selected state
        setCities([]); // Reset cities
        alert("Form submitted successfully!");
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  // Update validateForm to include state and city validation
  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      errors.name = "Name should only contain letters and spaces";
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid 10-digit Indian phone number";
    }

    // State validation
    if (!formData.state) {
      errors.state = "Please select a state";
    }

    // City validation
    if (!formData.city) {
      errors.city = "Please select a city";
    }

    // Class validation
    if (!formData.class) {
      errors.class = "Please select a class";
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return errors;
  };

  return (
    <div className="fixed right-0 top-[40%] z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-yellow-400 animate-pulse sm:text-lg text-black px-6 py-6 -rotate-90 translate-x-[38%] hover:bg-yellow-500/90">
            Enquire Now
          </Button>
        </DialogTrigger>
        <DialogContent
          closeIconClassName="hidden"
          className="max-w-[90vw] rounded-lg p-5 sm:max-w-[425px] max-h-[95vh] sm:max-h-[95vh] overflow-y-auto scrollbar-hide bg-gradient-to-tr from-green-900 sm:from-black via-green-950 sm:via-gray-900 to-green-900 sm:to-green-950 border-none"
        >
          <DialogHeader>
            <DialogTitle className="px-6 py-3 text-lg font-bold tracking-wider text-center text-white bg-green-800 sm:bg-green-900 rounded-lg sm:text-xl">
              Enquiry Form
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-3 py-2">
            {/* Name Field */}
            <div className="grid gap-1.5">
              <Label htmlFor="name" className="text-sm text-white">
                Name
              </Label>
              <Input
                id="name"
                className="h-8 text-sm"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              {errors?.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="grid gap-1.5">
              <Label htmlFor="email" className="text-sm text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="h-8 text-sm"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              {errors?.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="grid gap-1.5">
              <Label htmlFor="phone" className="text-sm text-white">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                className="h-8 text-sm"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
              {errors?.phone && (
                <p className="text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* State Select */}
            <div className="grid gap-1.5">
              <Label htmlFor="state" className="text-sm text-white">
                State
              </Label>
              <Select
                onValueChange={(value) => {
                  const selectedStateObj = states.find(
                    (state) => state.isoCode === value
                  );
                  setSelectedState(value);
                  setFormData({
                    ...formData,
                    state: selectedStateObj?.name || "", // Store state name like "Bihar" instead of "BR"
                    city: "",
                  });
                }}
              >
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent className="max-h-[200px] overflow-y-auto">
                  {states.map((state) => (
                    <SelectItem
                      key={state.isoCode}
                      value={state.isoCode}
                      className="text-sm"
                    >
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* City Select */}
            <div className="grid gap-1.5">
              <Label htmlFor="city" className="text-sm text-white">
                City
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, city: value })
                }
                disabled={!selectedState || isLoading}
              >
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue
                    placeholder={isLoading ? "Loading..." : "Select City"}
                  />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem
                      key={city.name}
                      value={city.name}
                      className="text-sm"
                    >
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Class Select */}
            <div className="grid gap-1.5">
              <Label htmlFor="class" className="text-sm text-white">
                Class
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, class: value })
                }
              >
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 9 }, (_, i) => i + 4).map((num) => (
                    <SelectItem
                      key={num}
                      value={num.toString()}
                      className="text-sm"
                    >
                      Class {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message Field */}
            <div className="grid gap-1.5">
              <Label htmlFor="message" className="text-sm text-white">
                Your Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[60px] text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-8 text-sm sm:text-white text-black bg-white sm:bg-green-900 hover:bg-green-800 hover:text-white"
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
