import React, { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/landing/bg1.webp";
import Container from "../../components/wrappers/Container";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../../lib/utils";
import PropTypes from "prop-types";
import { Button } from "../../components/ui/button";
import HeroBanner from "./HeroBanner";
import VisionaryCouple from "./VisionaryCouple";
import InteractiveTimeline from "./InteractiveTimeline";
import CrestAndMotto from "./CrestAndMotto";
import AchievementsSection from "./AchievementsSection";
import VisionLivesOn from "./VisionLivesOn";

const OurVisionaryLeaders = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about/our-visionary-leaders", label: "About" },
    { label: "Our Visionary Leaders" },
  ];
  return (
    <section>
      {/* <ImgAndBreadcrumb
        title="Our Visionary Leaders"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      /> */}
      <HeroBanner />
      <VisionaryCouple />
      <InteractiveTimeline />
      <CrestAndMotto />
      <AchievementsSection />
      <VisionLivesOn />
      {/* <Container></Container> */}
    </section>
  );
};

export default OurVisionaryLeaders;
