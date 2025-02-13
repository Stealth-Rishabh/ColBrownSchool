import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/admissions/faqs.jpeg";
import faq from "../../assets/admissions/faq.jpg";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import Heading from "../../components/Heading";
import { MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const FAQ = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/admissions/faqs", label: "Admissions" },
    {
      label: (
        <>
          <span className="hidden sm:inline">Frequently Asked Questions</span>
          <span className="sm:hidden">FAQs</span>
        </>
      ),
    },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Frequently Asked Questions"
        imageSrc={faq}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
        className="!text-xl sm:!text-5xl"
      />
      <section className="">
        <Container>
          {/* <Heading
            title="Frequently Asked Questions"
          titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
          subtitle="Our leadership team is dedicated to creating an empowering environment that nurtures your potential and drives collective success."
          subtitleClassName="text-gray-700"
          className="pt-12 mx-auto"
          />
          */}
          <FAQSection />
        </Container>
      </section>
    </section>
  );
};

export default FAQ;

("use client");

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the history of Col. Brown School?",
      answer:
        "Col. Brown School was founded in 1926 by Colonel William Brown and Mrs. Brown. It is one of the premier ICSE boarding schools in India, renowned for its holistic education and rich legacy.",
    },
    {
      question: "What curriculum does the school follow?",
      answer:
        "The school follows the Indian Certificate of Secondary Education (ICSE) curriculum, emphasizing academics, co-curricular activities, and character development.",
    },
    {
      question: "What facilities are available on campus?",
      answer:
        "Our campus includes state-of-the-art classrooms, well-equipped laboratories, a comprehensive library, modern sports facilities, residential hostels, dining halls, and spaces for extracurricular activities like music, arts, and theatre.",
    },
    {
      question: "How can I apply for admission?",
      answer:
        "Admission forms are available on our website and at the school office. The admission process includes submitting required documents, an entrance test, and an interaction session.",
    },
    {
      question: "Is the school open to international students?",
      answer:
        "Yes, we welcome students from across the globe. Our diverse community fosters cross-cultural learning and understanding.",
    },
    {
      question:
        "What support services are available for international students?",
      answer:
        "We offer various support services for international students, including orientation programs, language assistance, and counseling to help them adjust to life in India.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-green-600 tracking-wide uppercase">
                MOST ASKED QUESTIONS
              </h3>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                FAQs
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Below, you'll find answers to some of the most frequently asked
                questions about our school, admissions, facilities, and more.
              </p>
            </div>
            <div className="relative sm:aspect-[3/4] shadow-lg  max-h-96 border brightness-75 border-gray-200 w-full overflow-hidden rounded-2xl">
              <img
                src={faq}
                alt="Customer support representative"
                className="h-full w-full object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:pl-2"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left text-gray-900 hover:text-green-600 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
