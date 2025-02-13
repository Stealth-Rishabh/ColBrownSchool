import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/admissions/admission.jpg";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import Heading from "../../components/Heading";
import { MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import VerticalStepper from "./VerticalStepper";

const AdmissionProcedure = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/admissions/admission-procedure", label: "Admissions" },
    { label: "Admission Procedure" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Admission Procedure"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="sm:bg-gray-100">
        <Container className="sm:p-10 px-0">
          <Heading
            title="Admission Procedure"
            titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
            subtitle="Learn about the steps and requirements for admission."
            subtitleClassName="text-gray-700"
            className="pt-12 mx-auto sm:px-0 px-6 pb-1"
          />

          <VerticalStepper />
        </Container>
      </section>
    </section>
  );
};

export default AdmissionProcedure;
