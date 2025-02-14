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

// Static state data as fallback
const indianStates = [
  { iso2: "AN", name: "Andaman and Nicobar Islands" },
  { iso2: "AP", name: "Andhra Pradesh" },
  { iso2: "AR", name: "Arunachal Pradesh" },
  { iso2: "AS", name: "Assam" },
  { iso2: "BR", name: "Bihar" },
  { iso2: "CH", name: "Chandigarh" },
  { iso2: "CT", name: "Chhattisgarh" },
  { iso2: "DL", name: "Delhi" },
  { iso2: "GA", name: "Goa" },
  { iso2: "GJ", name: "Gujarat" },
  { iso2: "HR", name: "Haryana" },
  { iso2: "HP", name: "Himachal Pradesh" },
  { iso2: "JK", name: "Jammu and Kashmir" },
  { iso2: "JH", name: "Jharkhand" },
  { iso2: "KA", name: "Karnataka" },
  { iso2: "KL", name: "Kerala" },
  { iso2: "MP", name: "Madhya Pradesh" },
  { iso2: "MH", name: "Maharashtra" },
  { iso2: "MN", name: "Manipur" },
  { iso2: "ML", name: "Meghalaya" },
  { iso2: "MZ", name: "Mizoram" },
  { iso2: "NL", name: "Nagaland" },
  { iso2: "OR", name: "Odisha" },
  { iso2: "PY", name: "Puducherry" },
  { iso2: "PB", name: "Punjab" },
  { iso2: "RJ", name: "Rajasthan" },
  { iso2: "SK", name: "Sikkim" },
  { iso2: "TN", name: "Tamil Nadu" },
  { iso2: "TG", name: "Telangana" },
  { iso2: "TR", name: "Tripura" },
  { iso2: "UP", name: "Uttar Pradesh" },
  { iso2: "UT", name: "Uttarakhand" },
  { iso2: "WB", name: "West Bengal" },
];

export function EnquiryModal() {
  const [states] = useState(indianStates); // Remove setStates since it's not used
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

  // Fetch cities when state is selected
  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedState) return;
      setIsLoading(true);
      try {
        // For now, using some dummy cities based on state
        const dummyCities = [
          { id: 1, name: "City 1" },
          { id: 2, name: "City 2" },
          { id: 3, name: "City 3" },
        ];
        setCities(dummyCities);
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
    console.log(formData);
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
        <DialogContent closeIconClassName="hidden" className="max-w-[90vw] rounded-lg p-5  sm:max-w-[425px] max-h-[95vh] sm:max-h-[95vh] overflow-y-auto scrollbar-hide  bg-gradient-to-tr from-green-900 sm:from-black via via-green-950 sm:via-gray-900 to-green-900 sm:to-green-950 border-none">
          <DialogHeader>
            <DialogTitle className="px-6 py-3 text-lg font-bold tracking-wider text-center text-white bg-green-800 sm:bg-green-900 rounded-lg sm:text-xl">
              Enquiry Form
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-3 py-2">
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
            <div className="grid gap-1.5">
              <Label htmlFor="state" className="text-sm text-white">
                State
              </Label>
              <Select
                onValueChange={(value) => {
                  setSelectedState(value);
                  setFormData({ ...formData, state: value });
                }}
              >
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent className="max-h-[200px] overflow-y-auto">
                  {states.map((state) => (
                    <SelectItem
                      key={state.iso2}
                      value={state.iso2}
                      className="text-sm "
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
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue
                    placeholder={isLoading ? "Loading..." : "Select city"}
                  />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem
                      key={city.id}
                      value={city.name}
                      className="text-sm "
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
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 9 }, (_, i) => i + 4).map((num) => (
                    <SelectItem
                      key={num}
                      value={num.toString()}
                      className="text-sm "
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
