"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Users, Stethoscope, UserCog, BookOpen } from "lucide-react"
import Heading from "../../components/Heading"

const facultyList = [
  "Mr. Joshi",
  "Mr. Hasan Hussain",
  "Mr. B. Nath",
  "Mr. G.M. Matto",
  "Mr. P.N. Matto",
  "Miss Wrack",
  "Mr. Narayan",
  "Mr. Uggar Sen",
  "Mrs. Betty Hughes",
  "Mrs. O' Peck",
  "Mrs. Cunnington",
  "Mr. A.M. Saxena",
  "Mr. S.K.Chatterjee",
  "Shri Shanti Sarup",
  "Mr. Dwejan Sen",
  "Mr. G.D.Kukreti",
  "Mr. & Mrs. J.A.S. Newton",
  "Mr. & Mrs. W.C.R. Smith",
]

const medicalStaffList = [
  "Dr. Hoon",
  "Dr. Shome",
  "Dr. Hari Singh Maini",
  "Dr. Arun Kumar",
  "Dr. N.N. Kapadia",
  "Dr. Kalhan",
  "Dr. Anil Agarwal",
  "Mrs. G. Cockhill",
  "Sister Homes",
  "Sister Anderson",
  "Sister Francis",
]

const supportStaffList = [
  { category: "Mess Workers", names: ["Biswnath Singh", "Balbahadur", "Tikka Ram", "Chand Mohd.", "Haider Baksh"] },
  { category: "Butler", names: ["Mohammad"] },
  { category: "Maali", names: ["Shankar"] },
  { category: "Safai Karamchari", names: ["Mangta"] },
  { category: "Office Staff", names: ["Kamlakar Singh", "Lalta Prasad"] },
]

const MotionCard = motion(Card)

export default function FacultyStaffSection() {
  const [activeTab, setActiveTab] = useState("faculty")

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto px-4 pb-8 ">
      <Heading
        title="Faculty & Staff"
        titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
        subtitle="Our leadership team is dedicated to creating an empowering environment that nurtures your potential and drives collective success."
        subtitleClassName="text-gray-700"
        className="pt-0 mx-auto"
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="faculty" className="flex items-center justify-center">
            <Users className="mr-2" />
            Faculty
          </TabsTrigger>
          <TabsTrigger value="medical" className="flex items-center justify-center">
            <Stethoscope className="mr-2" />
            Medical Staff
          </TabsTrigger>
          <TabsTrigger value="support" className="flex items-center justify-center">
            <UserCog className="mr-2" />
            Support Staff
          </TabsTrigger>
        </TabsList>
        <TabsContent value="faculty">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center">
            <BookOpen className="mr-2 mt-1" />
            Outstanding Teachers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {facultyList.map((name, index) => (
              <MotionCard
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <CardContent className="p-4">
                  <p className="text-gray-800 font-light">{name}</p>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="medical">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center">
            <Stethoscope className="mr-2" />
            Outstanding Medical Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {medicalStaffList.map((name, index) => (
              <MotionCard
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <CardContent className="p-4">
                  <p className="text-gray-800 font-light">{name}</p>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="support">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center">
            <UserCog className="mr-2" />
            Support Staff
          </h2>
          {supportStaffList.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-gray-600">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.names.map((name, nameIndex) => (
                  <MotionCard
                    key={nameIndex}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3, delay: nameIndex * 0.05 }}
                    className="bg-white hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    <CardContent className="p-4">
                      <p className="text-gray-800 font-light">{name}</p>
                    </CardContent>
                  </MotionCard>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

