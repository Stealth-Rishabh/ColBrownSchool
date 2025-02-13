import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/admissions/registration.jpg";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import Heading from "../../components/Heading";
import { MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/admissions/registration", label: "Admissions" },
    { label: "Registration" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Registration"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="bg-gray-100">
        {/* <Container>
          <Heading
            title="Registration"
          titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
          subtitle="Our leadership team is dedicated to creating an empowering environment that nurtures your potential and drives collective success."
          subtitleClassName="text-gray-700"
          className="pt-12 mx-auto"
          />
         
        </Container> */}
        <RegistrationForm />
      </section>
    </section>
  );
};

export default Registration;
