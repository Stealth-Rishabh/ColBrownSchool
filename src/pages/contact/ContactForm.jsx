import React, { useState, useEffect } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/contact.webp";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import { Phone, Mail, MapPin, SendHorizonal, Loader2 } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { State, City } from "country-state-city";
import { State, City } from "../../utils/stateCity";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/contact-us", label: "Contact" },
    { label: "Contact Us" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Contact Us"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="bg-gray-100">
        <Container>
          <ContactSection />
        </Container>
      </section>
    </section>
  );
};

export default ContactForm;

const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    class: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch Indian states using country-state-city
    const indianStates = State.getStatesOfCountry("IN");
    setStates(indianStates);
  }, []);

  useEffect(() => {
    if (selectedState) {
      const fetchedCities = City.getCitiesOfState("IN", selectedState);
      setCities(fetchedCities);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent's name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.parentName)) {
      newErrors.parentName =
        "Parent's name should only contain letters and spaces";
    }

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student's name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.studentName)) {
      newErrors.studentName =
        "Student's name should only contain letters and spaces";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length > 10) {
      newErrors.phone = "Phone number cannot exceed 10 digits";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }

    if (!formData.state) {
      newErrors.state = "Please select a state";
    }

    if (!formData.city) {
      newErrors.city = "Please select a city";
    }

    if (!formData.class) {
      newErrors.class = "Please select a class";
    }

    if (!formData.enquiry.trim()) {
      newErrors.enquiry = "Enquiry message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Create FormData object with the expected field names
      const formDataToSend = new FormData();
      formDataToSend.append("contact-parent-name", formData.parentName);
      formDataToSend.append("contact-student-name", formData.studentName);
      formDataToSend.append("contact-email", formData.email);
      formDataToSend.append("contact-phone", formData.phone);
      formDataToSend.append("contact-state", formData.state);
      formDataToSend.append("contact-city", formData.city);
      formDataToSend.append("contact-class", formData.class);
      formDataToSend.append("contact-enquiry", formData.enquiry);
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
          // Clear form data and related states
          setFormData({
            parentName: "",
            studentName: "",
            email: "",
            phone: "",
            state: "",
            city: "",
            class: "",
            enquiry: "",
          });
          setSelectedState(""); // Reset selected state
          setCities([]); // Clear cities list

          // Force Select components to reset by clearing their values
          const stateSelect = document.querySelector('select[name="state"]');
          const citySelect = document.querySelector('select[name="city"]');
          const classSelect = document.querySelector('select[name="class"]');
          if (stateSelect) stateSelect.value = "";
          if (citySelect) citySelect.value = "";
          if (classSelect) classSelect.value = "";

          // alert("Form submitted successfully!");
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
    }
  };

  const handleStateChange = (value) => {
    setSelectedState(value);
    const selectedStateObj = states.find((state) => state.isoCode === value);
    const stateName = selectedStateObj ? selectedStateObj.name : "";
    setFormData({ ...formData, state: stateName, city: "" });

    // Clear city if state changes
    setCities([]);
  };

  return (
    <section className="sm:pt-20 pt-12">
      <div className="mx-auto max-min-w-5 sm:w-7xl sm:px-6 lg:px-11">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mb-10 lg:mb-0 drop-shadow-lg">
            <div className="w-full h-full group">
              <div className="relative h-full">
                <img
                  src="https://www.welhamboys.org/images/contact-banner.jpg"
                  alt="ContactUs tailwind section"
                  className="object-cover w-full sm:h-full min-h-[550px] bg-green-700 lg:rounded-l-2xl brightness-50 rounded-2xl bg-blend-multiply"
                />
                <h1 className="absolute text-3xl font-bold leading-10 text-white font-manrope sm:text-4xl top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute top-1/2 -translate-y-[42%] sm:-translate-y-1/2 w-full p-3 sm:p-5 lg:p-8">
                  <div className="block space-y-4 sm:p-6">
                    <div className="flex flex-col p-3 border-[0.5px] hover:-translate-y-2 transition-all duration-300 border-white/40 rounded-md backdrop-blur-md">
                      <h5 className="mb-4 text-lg font-semibold leading-6 text-white">
                        Email Enquiry
                      </h5>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=principal@colbrownschool.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Mail className="text-white min-w-5 sm:w-7 h-7" />
                        <h5 className="ml-5 text-sm sm:text-base font-normal leading-6 text-white">
                          principal@colbrownschool.com
                        </h5>
                      </a>
                    </div>
                    <div className="flex flex-col p-3 border-[0.5px] hover:-translate-y-2 transition-all duration-300 border-white/40 rounded-md backdrop-blur-md">
                      <h5 className="mb-4 text-lg font-semibold leading-6 text-white">
                        Call Us
                      </h5>
                      <div className="flex flex-wrap gap-2 sm:gap-0">
                        <a
                          href="tel:+916395114363"
                          className="flex items-center"
                        >
                          <Phone className="text-white min-w-5 sm:w-5 h-5" />
                          <h5 className="mx-2 mr-3 sm:ml-5 sm:mr-0 text-sm sm:text-base font-normal leading-6 text-white">
                            +91 6395114363
                          </h5>
                        </a>

                        <a
                          href="tel:+911352655233"
                          className="flex items-center"
                        >
                          <Phone className="text-white block sm:hidden min-w-5 sm:w-5 h-5" />
                          <h5 className="ml-2 sm:ml-5 text-sm sm:text-base font-normal leading-6 text-white">
                            +91 135 2655233
                          </h5>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col p-3 border-[0.5px] hover:-translate-y-2 transition-all duration-300 border-white/40 rounded-md backdrop-blur-md">
                      <h5 className="mb-4 text-lg font-semibold leading-6 text-white">
                        Location
                      </h5>
                      <a
                        href="https://www.google.com/maps/place/Col.+Brown+Cambridge+School/@30.322328,78.056969,1446m/data=!3m1!1e3!4m6!3m5!1s0x390929b641fd13a5:0xf2f0dda3f2210a65!8m2!3d30.3223276!4d78.0569688!16s%2Fm%2F0bmjr27?hl=en&entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
                        target="_blank"
                        className="flex"
                      >
                        <MapPin className="mt-1 text-white min-w-5 sm:w-7 h-7" />
                        <h5 className="ml-5 text-sm sm:text-base font-normal leading-6 text-white">
                          5 Kasturba Road, Dalanwala Dehradun – 248 001
                          Uttarakhand, India
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gray-50 lg:p-11 lg:rounded-r-2xl rounded-2xl drop-shadow">
            <h2 className="text-3xl font-semibold leading-10 text-green-800 font-manrope sm:text-4xl mb-11">
              Send Us A Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-7">
              <div>
                <Input
                  type="text"
                  placeholder="Parent's Name"
                  className={`h-12 bg-transparent rounded-lg ${
                    errors.parentName ? "border-red-500" : ""
                  }`}
                  value={formData.parentName}
                  onChange={(e) => {
                    setFormData({ ...formData, parentName: e.target.value });
                    if (errors.parentName)
                      setErrors({ ...errors, parentName: "" });
                  }}
                />
                {errors.parentName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.parentName}
                  </p>
                )}
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Student's Name"
                  className={`h-12 bg-transparent rounded-lg ${
                    errors.studentName ? "border-red-500" : ""
                  }`}
                  value={formData.studentName}
                  onChange={(e) => {
                    setFormData({ ...formData, studentName: e.target.value });
                    if (errors.studentName)
                      setErrors({ ...errors, studentName: "" });
                  }}
                />
                {errors.studentName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.studentName}
                  </p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className={`h-12 bg-transparent rounded-lg ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <Input
                  type="tel"
                  maxLength={10}
                  placeholder="Phone"
                  className={`h-12 bg-transparent rounded-lg ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                    setFormData({ ...formData, phone: value });
                    if (errors.phone) setErrors({ ...errors, phone: "" });
                  }}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
              <div>
                <Select onValueChange={handleStateChange} name="state">
                  <SelectTrigger className="h-12 bg-transparent rounded-lg">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.state && (
                  <p className="mt-1 text-sm text-red-500">{errors.state}</p>
                )}
              </div>
              <div>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, city: value })
                  }
                  disabled={!selectedState}
                  name="city"
                >
                  <SelectTrigger className="h-12 bg-transparent rounded-lg">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.name} value={city.name}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.city && (
                  <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                )}
              </div>
              <div>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, class: value })
                  }
                  name="class"
                >
                  <SelectTrigger className="h-12 bg-transparent rounded-lg">
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 9 }, (_, i) => i + 4).map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        Class {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.class && (
                  <p className="mt-1 text-sm text-red-500">{errors.class}</p>
                )}
              </div>
              <div>
                <Textarea
                  placeholder="Enquiry"
                  className={`min-h-[120px] rounded-lg bg-transparent resize-none ${
                    errors.enquiry ? "border-red-500" : ""
                  }`}
                  value={formData.enquiry}
                  onChange={(e) => {
                    setFormData({ ...formData, enquiry: e.target.value });
                    if (errors.enquiry) setErrors({ ...errors, enquiry: "" });
                  }}
                />
                {errors.enquiry && (
                  <p className="mt-1 text-sm text-red-500">{errors.enquiry}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 group bg-green-800 rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    Please Wait{" "}
                    <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message{" "}
                    <SendHorizonal className="mt-1 w-5 h-5 text-white group-hover:translate-x-2 transition-all duration-300" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-10 p-5 bg-gray-50 lg:p-11 lg:rounded-r-2xl rounded-2xl drop-shadow">
          <h2 className="text-3xl font-semibold leading-10 text-green-800 font-manrope sm:text-4xl mb-11 flex items-center">
            <MapPin className="text-green-800 min-w-5 mt-1 sm:w-7 h-7 mr-2" />{" "}
            Our Location
          </h2>
          <div className="mt-5 overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d423612.82089899003!2d78.056969!3d30.322328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929b641fd13a5%3A0xf2f0dda3f2210a65!2sCol.%20Brown%20Cambridge%20School!5e1!3m2!1sen!2sus!4v1737722820602!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
