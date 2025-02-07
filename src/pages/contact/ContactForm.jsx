import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/contact.jpg";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import { Phone, Mail, MapPin, SendHorizonal } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

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
          {/* <Heading
            title="Contact Us"
          titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
          subtitle="Our leadership team is dedicated to creating an empowering environment that nurtures your potential and drives collective success."
          subtitleClassName="text-gray-700"
          className="pt-12 mx-auto"
          />
          */}
          <ContactSection />
        </Container>
      </section>
    </section>
  );
};

export default ContactForm;
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "Admissions",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]{3,50}$/.test(formData.name.trim())) {
      newErrors.name = "Name should be 3-50 characters long and contain only letters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (Indian format)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission
    }
  };

  return (
    <section className="sm:pt-20 pt-12">
      <div className=" mx-auto max-min-w-5 sm:w-7xl sm:px-6 lg:px-11">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="mb-10 lg:mb-0 drop-shadow-lg">
            <div className="w-full h-full group ">
              <div className="relative h-full">
                <img
                  src="https://www.welhamboys.org/images/contact-banner.jpg"
                  alt="ContactUs tailwind section"
                  className="object-cover w-full sm:h-full min-h-[550px] bg-green-700 lg:rounded-l-2xl brightness-50 rounded-2xl bg-blend-multiply"
                />
                <h1 className="absolute text-3xl font-bold leading-10 text-white font-manrope sm:text-4xl top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute top-1/2 -translate-y-1/2 w-full p-5 lg:p-8">
                  <div className="block space-y-4 sm:p-6 ">
                    <div className="flex flex-col  p-3 border-[0.5px] hover:-translate-y-2 transition-all duration-300 border-white/40 rounded-md backdrop-blur-md ">
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
                    <div className="flex flex-col  p-3 border-[0.5px] hover:-translate-y-2 transition-all duration-300 border-white/40 rounded-md backdrop-blur-md">
                      <h5 className="mb-4 text-lg font-semibold leading-6 text-white">
                        Call Us
                      </h5>
                      <div className="flex">
                        <a
                          href="tel:+916395114363"
                          className="flex items-center"
                        >
                          <Phone className="text-white min-w-5 sm:w-5 h-5" />
                          <h5 className="ml-5 text-sm sm:text-base font-normal leading-6 text-white">
                            +91 6395114363
                          </h5>
                        </a>
                        <a
                          href="tel:+917579495090"
                          className="flex items-center"
                        >
                          <h5 className="ml-5 text-sm sm:text-base font-normal leading-6 text-white">
                            +91 7579495090
                          </h5>
                        </a>
                        <a
                          href="tel:+911352655233"
                          className="flex items-center"
                        >
                          <h5 className="ml-5 text-sm sm:text-base font-normal leading-6 text-white">
                            +91 135 2655233
                          </h5>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col  p-3 border-[0.5px] hover:-translate-y-2 transition-all duration-300 border-white/40 rounded-md backdrop-blur-md">
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
                  placeholder="Name"
                  className={`h-12 bg-transparent rounded-lg ${errors.name ? 'border-red-500' : ''}`}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className={`h-12 bg-transparent rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone"
                  className={`h-12 bg-transparent rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>
              <Select 
                defaultValue="Admissions"
                onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}
              >
                <SelectTrigger className="h-12 bg-transparent rounded-lg">
                  <SelectValue placeholder="Select enquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admissions">Admissions</SelectItem>
                  <SelectItem value="General">General</SelectItem>
                </SelectContent>
              </Select>
              <div>
                <Textarea
                  placeholder="Your message"
                  className={`min-h-[120px] rounded-lg bg-transparent resize-none ${errors.message ? 'border-red-500' : ''}`}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              <Button
                type="submit"
                className="w-full h-12 group bg-green-800 rounded-lg hover:bg-green-700"
              >
                Send Message{" "}
                <SendHorizonal className="mt-1 w-5 h-5 text-white group-hover:translate-x-2 transition-all duration-300" />
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
