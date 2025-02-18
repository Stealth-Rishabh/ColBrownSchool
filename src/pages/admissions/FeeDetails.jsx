import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/admissions/feesDetails.webp";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import Heading from "../../components/Heading";
import { MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import FeeStructure from "./FeeStructure";

const FeeDetails = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/admissions/fee-details", label: "Admissions" },
    { label: "Fee Details" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Fee Details"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="bg-gray-100">
        <Container>
          <Heading
            title="Fee Structure"
            titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
            subtitle="Explore our fee structure designed to provide quality education while ensuring affordability."
            subtitleClassName="text-gray-700"
            className="pt-12 mx-auto"
          />
          <FeeStructure />
        </Container>
      </section>
    </section>
  );
};

export default FeeDetails;
