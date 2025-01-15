import React from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/landing/bg1.webp";
const LegacyCBS = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about/legacy-cbs", label: "About" },
    { label: "Legacy CBS" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Legacy of CBS"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
    </section>
  );
};

export default LegacyCBS;
