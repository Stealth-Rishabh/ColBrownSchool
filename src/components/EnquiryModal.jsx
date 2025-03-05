"use client";

import { useState, useEffect } from "react";
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
// import { State, City } from "country-state-city";
import { State, City } from "../utils/stateCity";
import { ConfettiButton } from "@/components/magicui/confetti";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

export function EnquiryModal() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    class: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const indianStates = State.getStatesOfCountry("IN");
    setStates(indianStates);
  }, []);

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

  useEffect(() => {
    const hasModalBeenShown = sessionStorage.getItem("enquiryModalShown");

    if (!hasModalBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (!open) {
      sessionStorage.setItem("enquiryModalShown", "true");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("contact-parent-name", formData.parentName);
    formDataToSend.append("contact-student-name", formData.name);
    formDataToSend.append("contact-email", formData.email);
    formDataToSend.append("contact-phone", formData.phone);
    formDataToSend.append("contact-state", formData.state);
    formDataToSend.append("contact-city", formData.city);
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          class: "",
          message: "",
        });
        setSelectedState("");
        setCities([]);
        setIsOpen(false);
        sessionStorage.setItem("enquiryModalShown", "true");
        navigate("/thank-you");
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.parentName.trim()) {
      errors.parentName = "Parent Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.parentName)) {
      errors.parentName = "Parent Name should only contain letters and spaces";
    }
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      errors.name = "Name should only contain letters and spaces";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid 10-digit Indian phone number";
    }

    if (!formData.state) {
      errors.state = "Please select a state";
    }

    if (!formData.city) {
      errors.city = "Please select a city";
    }

    if (!formData.class) {
      errors.class = "Please select a class";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return errors;
  };

  return (
    <div className="fixed right-0 top-[40%] z-50">
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button className="bg-yellow-400 animate-pulse sm:text-lg text-black px-6 py-6 -rotate-90 translate-x-[38%] hover:bg-yellow-500/90">
            Enquire Now
          </Button>
        </DialogTrigger>
        <DialogContent
          closeIconClassName=" bg-white rounded relative"
          className="max-w-[90vw] scale-90 rounded-lg p-5 sm:max-w-[425px] h-auto sm:max-h-auto overflow-y-auto scrollbar-hide bg-gradient-to-tr from-green-900 sm:from-black via-green-950 sm:via-gray-900 to-green-900 sm:to-green-950 border-none"
        >
          <DialogHeader>
            <DialogTitle className="px-6 py-3 mt-5 text-lg font-bold tracking-wider text-center text-white bg-green-800 rounded-lg sm:bg-green-900 sm:text-xl">
              Enquiry Form
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-3 py-2">
            <div className="grid gap-1.5">
              <Label htmlFor="name" className="text-sm text-white">
                Parent Name
              </Label>
              <Input
                id="name"
                className="h-8 text-sm rounded"
                value={formData.parentName}
                onChange={(e) =>
                  setFormData({ ...formData, parentName: e.target.value })
                }
                required
              />
              {errors?.parentName && (
                <p className="text-xs text-red-500">{errors.parentName}</p>
              )}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="name" className="text-sm text-white">
                Student Name
              </Label>
              <Input
                id="name"
                className="h-8 text-sm rounded"
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

            <div className="grid gap-1.5">
              <Label htmlFor="email" className="text-sm text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="h-8 text-sm rounded"
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

            <div className="grid gap-1.5">
              <Label htmlFor="phone" className="text-sm text-white">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                maxLength={10}
                className="h-8 text-sm rounded"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setFormData({ ...formData, phone: value });
                }}
                required
              />
              {errors?.phone && (
                <p className="text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

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
                    state: selectedStateObj?.name || "",
                    city: "",
                  });
                }}
              >
                <SelectTrigger className="h-8 text-sm rounded">
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
                <SelectTrigger className="h-8 text-sm rounded">
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

            <div className="grid gap-1.5">
              <Label htmlFor="class" className="text-sm text-white">
                Class
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, class: value })
                }
              >
                <SelectTrigger className="h-8 text-sm rounded">
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

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-8 text-sm text-black bg-white rounded sm:text-white sm:bg-green-900 hover:bg-green-800 hover:text-white disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  Please Wait <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
