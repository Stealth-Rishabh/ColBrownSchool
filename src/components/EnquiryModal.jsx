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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
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
