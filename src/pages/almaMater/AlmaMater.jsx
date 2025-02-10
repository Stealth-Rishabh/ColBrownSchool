"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  title: z.string(),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  rollNo: z.string().min(1, {
    message: "Roll number is required.",
  }),
  house: z.string().min(1, {
    message: "Please select your house.",
  }),
  batch: z.string().min(1, {
    message: "Batch year is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  mobile: z.string().min(10, {
    message: "Please enter a valid mobile number.",
  }),
  profession: z.string().min(1, {
    message: "Profession is required.",
  }),
  address: z.string().min(1, {
    message: "Address is required.",
  }),
  visitDate: z.date({
    required_error: "Please select a date.",
  }),
  visitTime: z.string().min(1, {
    message: "Please select a time.",
  }),
  interactionDetails: z.string(),
  additionalVisitors: z.string(),
})

const AlmaMater = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Mr.",
      name: "",
      rollNo: "",
      house: "",
      batch: "",
      email: "",
      mobile: "",
      profession: "",
      address: "",
      interactionDetails: "",
      additionalVisitors: "",
    },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <section className="sm:py-20 bg-gradient-to-tr from-black via-gray-900 to-green-950">
    <div className="max-w-2xl my-  mx-auto p-6 bg-white sm:rounded-lg sm:shadow-lg">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Alumni Registration</h2>
      

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select title" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mr.">Mr.</SelectItem>
                    <SelectItem value="Mrs.">Mrs.</SelectItem>
                    <SelectItem value="Ms.">Ms.</SelectItem>
                    <SelectItem value="Dr.">Dr.</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="rollNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Roll Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Your WBS roll number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="house"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>House</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your house" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="red">Red House</SelectItem>
                      <SelectItem value="blue">Blue House</SelectItem>
                      <SelectItem value="green">Green House</SelectItem>
                      <SelectItem value="yellow">Yellow House</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="batch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Batch Year</FormLabel>
                  <FormControl>
                    <Input placeholder="Year of graduation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="mobile"
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
              name="profession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Profession</FormLabel>
                  <FormControl>
                    <Input placeholder="Your current role" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Permanent Address</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter your permanent address"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="visitDate"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Intended Visit Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="visitTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Time</FormLabel>
                  <FormControl>
                    <Input 
                      type="time"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="interactionDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Interactions</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please mention any specific person or department you would like to interact with during your visit"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This helps us arrange meetings in advance
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="additionalVisitors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Visitors</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please mention details of any additional visitors (batchmates, family members, etc.)"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Help us prepare for all your companions
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-green-800 hover:bg-green-700">
            Submit Registration
          </Button>
        </form>
      </Form>
    </div>
    </section>
  )
}


export default AlmaMater