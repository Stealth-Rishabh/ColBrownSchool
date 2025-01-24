import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/landing/bg1.webp";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import { Phone, Mail, MapPin, SendHorizonal } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

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
  return (
    <section className="sm:pt-20 pt-12">
      <div className=" mx-auto max-min-w-5 sm:w-7xl sm:px-6 lg:px-8">
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
                <div className="absolute bottom-0 w-full p-5 lg:p-11">
                  <div className="block space-y-4 sm:p-6 ">
                    <div className="flex flex-col  p-3 border-[0.5px] hover:-translate-y-2 transition-all duration-300 border-white/40 rounded-md backdrop-blur-md ">
                      <h5 className="mb-4 text-lg font-semibold leading-6 text-white">
                        Email Enquiry
                      </h5>
                      <a
                        href="mailto:principal@colbrownschool.com"
                        className="flex items-center mb-6"
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
                      <a
                        href="tel:+916395114363"
                        className="flex items-center mb-6"
                      >
                        <Phone className="text-white min-w-5 sm:w-7 h-7" />
                        <h5 className="ml-5 text-sm sm:text-base font-normal leading-6 text-white">
                          +91 6395114363, +91 7579495090, +91 135 2655233
                        </h5>
                      </a>
                    </div>
                    <div className="flex flex-col  p-3 border-[0.5px] hover:-translate-y-2 transition-all duration-300 border-white/40 rounded-md backdrop-blur-md">
                      <h5 className="mb-4 text-lg font-semibold leading-6 text-white">
                        Location
                      </h5>
                      <a href="#" className="flex items-">
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
            <form className="space-y-5 sm:space-y-10">
              <Input
                type="text"
                placeholder="Name"
                className="h-12 bg-transparent rounded-lg"
              />
              <Input
                type="email"
                placeholder="Email"
                className="h-12 bg-transparent rounded-lg"
              />
              <Input
                type="tel"
                placeholder="Phone"
                className="h-12 bg-transparent rounded-lg"
              />
              <Textarea
                placeholder="Your message"
                className="min-h-[120px] rounded-lg bg-transparent resize-none"
              />
              <div>
                <Label className=" text-lg font-normal leading-7 text-gray-500">
                  Preferred method of communication
                </Label>
                <div className="flex mt-5">
                  <div className="flex items-center mr-11">
                    <RadioGroup defaultValue="email" className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email" />
                        <Label htmlFor="email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone" />
                        <Label htmlFor="phone">Phone</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
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
