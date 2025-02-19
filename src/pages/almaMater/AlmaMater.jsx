"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  alumniname: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  alumniemail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  alumniphone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  alumnimobile: z.string().min(10, {
    message: "Please enter a valid mobile number.",
  }),
  dob: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Please enter a valid date.",
  }),
  alumniaddressone: z.string().min(1, {
    message: "Address Line 1 is required.",
  }),
  alumniaddresstwo: z.string().optional(),
  alumnicity: z.string().min(1, {
    message: "City is required.",
  }),
  alumnistate: z.string().min(1, {
    message: "State is required.",
  }),
  alumnicountry: z.string().min(1, {
    message: "Country is required.",
  }),
  alumnipin: z.string().min(1, {
    message: "Pin Number is required.",
  }),
  alumnicomment: z.string().optional(),
});

const AlmaMater = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      alumniname: "",
      alumniemail: "",
      alumniphone: "",
      alumnimobile: "",
      dob: "",
      alumniaddressone: "",
      alumniaddresstwo: "",
      alumnicity: "",
      alumnistate: "",
      alumnicountry: "",
      alumnipin: "",
      alumnicomment: "",
    },
  });

  async function onSubmit(values) {
    // Debug: Log form values
    console.log("Form Values:", values);

    try {
      const response = await fetch(
        "https://www.colbrownschool.com/api/process_alumni_registration.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      // Debug: Log raw response
      console.log("Raw Response:", response);

      const data = await response.json();

      // Debug: Log parsed response data
      console.log("Response Data:", data);

      if (response.ok) {
        console.log("Registration successful!");
        alert("Registration Successful!");
        form.reset();
      } else {
        console.error("Registration failed:", data.message);
        alert(`Registration Failed: ${data.message}`);
      }
    } catch (error) {
      // Debug: Log detailed error information
      console.error("Error Details:", {
        message: error.message,
        stack: error.stack,
        error: error,
      });
      alert("An error occurred while submitting the form.");
    }
  }

  return (
    <section className="sm:py-20 bg-gradient-to-tr from-black via-gray-900 to-green-950">
      <div className="max-w-2xl my- mx-auto p-6 bg-white sm:rounded-lg sm:shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          Alumni Registration
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="alumniname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alumniemail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alumniphone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 XXXXXXXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alumnimobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 XXXXXXXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alumniaddressone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address Line 1</FormLabel>
                  <FormControl>
                    <Input placeholder="Address line 1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alumniaddresstwo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address Line 2</FormLabel>
                  <FormControl>
                    <Input placeholder="Address line 2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alumnicity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alumnistate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="State" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alumnicountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alumnipin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pin Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Pin Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alumnicomment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your comment"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-700"
            >
              Submit Registration
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default AlmaMater;
