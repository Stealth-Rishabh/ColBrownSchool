import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BanknoteIcon as Bank,
  Book,
  CreditCard,
  GraduationCap,
  Info,
  Phone,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FeeStructure = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
  };

  const [sidebarRef, sidebarInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [mainRef, mainInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const bankDetails = [
    { label: "Beneficiary", value: "Col Brown Cambridge School" },
    { label: "Bank", value: "Punjab and Sind Bank" },
    { label: "Branch", value: "2 Inder Road, Dalanwala" },
    { label: "Account No", value: "03831000005603" },
    { label: "IFSC Code", value: "PSIB0000383" },
    { label: "City", value: "Dehradun" },
  ];

  const registrationFees = [
    { type: "Offline", fee: "₹5,000 (From the school reception)" },
    {
      type: "Online",
      fee: "₹5,120 (Through our website www.colbrownschool.com)",
    },
  ];

  const feeStructures = [
    {
      title: "Fee Structure 2025-26 (Class IV-V)",
      icon: Book,
      fees: [
        {
          description: "The School Fees for Academic Year",
          amount: "₹3,80,000",
        },
        { description: "Caution Deposit (Refundable)", amount: "₹20,000" },
        { description: "Admission Fee (Non-Refundable)", amount: "₹48,000" },
      ],
    },
    {
      title: "Fee Structure 2025-26 (Class VI-XII)",
      icon: GraduationCap,
      fees: [
        {

          description: "The School Fees for Academic Year",
          amount: "₹5,90,000.00",
        },
        { description: "Caution Deposit (Refundable)", amount: "₹20,000.00" },
        { description: "Admission Fee (Non-Refundable)", amount: "₹48,000.00" },
      ],
    },
  ];

  const SidebarCard = ({ title, icon: Icon, children }) => (
    <Card className="mb-4 bg-white transition-colors duration-300">
      <CardHeader className="flex flex-row items-center space-x-2 py-5">
        <Icon className="h-6 w-6 text-green-800 mt-2" />
        <CardTitle className="text-xl font-semibold text-green-800 flex items-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 text-xs text-green-800">
        {children}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen sm:px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8">
        <motion.aside
          ref={sidebarRef}
          initial="hidden"
          animate={sidebarInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="lg:col-span-2"
        >
          <div className="sticky top-8 space-y-4">
            <motion.div variants={cardVariants}>
              <SidebarCard title="School Bank Account" icon={Bank}>
                <dl className="space-y-3">
                  {bankDetails.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex sm:items-center gap-2 p-5 border border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition-colors duration-300 shadow-lg"
                    >
                      <dt className="font-semibold text-base">{label}:</dt>
                      <dd className="text-base">{value}</dd>
                    </div>
                  ))}
                </dl>
              </SidebarCard>
            </motion.div>
            <motion.div variants={cardVariants}>
              <SidebarCard
                title="Contact Information"
                icon={Phone}
                className="bg-green-800 text-white"
              >
                <div className="flex flex-col gap-2 p-5 border border-green-800 rounded-lg hover:bg-green-800 hover:text-white transition-colors duration-300 shadow-lg">
                  <p className="text-base">
                    <a href="tel:+916395114363">+91 6395114363</a> /{" "}
                    <a href="tel:01353593138">0135-3593138</a>
                  </p>
                  <p className="text-base">
                    (10:00am – 4:00pm) Monday to Saturday
                  </p>
                </div>
              </SidebarCard>
            </motion.div>
          </div>
        </motion.aside>

        <motion.main
          ref={mainRef}
          initial="hidden"
          animate={mainInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="lg:col-span-4"
        >
          <div className="space-y-8">
            <motion.section variants={itemVariants}>
              <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-green-800 text-white">
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Registration Fee
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/2">Type</TableHead>
                        <TableHead>Fee</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {registrationFees.map(({ type, fee }) => (
                        <TableRow key={type}>
                          <TableCell className="font-medium">{type}</TableCell>
                          <TableCell>{fee}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <p className="mt-4 text-sm text-green-800 flex sm:items-center">
                    <Info className="mr-2 h-4 w-6 mt-1 sm:mt-0" />
                    Prospectus, Sample paper & syllabus will be issued after
                    Registration.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {feeStructures.map(({ title, icon: Icon, fees }, index) => (
              <motion.section
                key={title}
                variants={itemVariants}
                custom={index}
              >
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader className="bg-green-800 text-white">
                    <CardTitle className="flex items-center">
                      <Icon className="mr-2 min-h-5 min-w-5 sm:h-5 sm:w-5" />
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-2/3">Description</TableHead>
                          <TableHead>Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {fees.map(({ description, amount }) => (
                          <TableRow key={description}>
                            <TableCell className="font-medium">
                              {description}
                            </TableCell>
                            <TableCell>{amount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </motion.section>
            ))}

            <motion.section variants={itemVariants}>
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent>
                  <p className="text-sm text-green-800 flex  text-justify pt-5">
                    <Info className="mr-2 h-4 min-w-4 mt-2 sm:mt-1" />
                    Note: Any celebration, medical specialist, woolen uniform,
                    council registration, traveling & trekking will be extra on
                    occurrence.
                  </p>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default FeeStructure;
