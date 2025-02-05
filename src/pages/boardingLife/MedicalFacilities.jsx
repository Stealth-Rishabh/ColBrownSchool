import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/boarding-life/medical2.webp";
import medical1 from "../../assets/boarding-life/medical1.webp";
import medical3 from "../../assets/boarding-life/medical3.webp";
import PropTypes from "prop-types";
import { Stethoscope, Heart, Clock } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Medical Center",
    desc: "Our fully equipped medical center with qualified staff provides comprehensive healthcare services to all students.",
  },
  {
    icon: Heart,
    title: "24/7 Care",
    desc: "Round-the-clock medical assistance ensures immediate attention to any health concerns our students may have.",
  },
  {
    icon: Clock,
    title: "Regular Check-ups",
    desc: "We conduct regular health check-ups and maintain detailed medical records for all our students.",
  },
];

const MedicalFacilities = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/boarding-life/medical-facilities", label: "Boarding Life" },
    { label: "Medical Facilities" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Medical Facilities"
        imageSrc={img}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="bg-white pt-12">
        <Feature />
        <Stats />
        <Gallery />
      </section>
    </section>
  );
};

export default MedicalFacilities;

const FeaturedItem = ({ feature }) => {
  return (
    <div className="w-full h-full">
      <div className="text-center flex flex-col items-center p-6 lg:p-12 !py-7 bg-green-50 rounded-lg h-full">
        <div className="flex justify-center items-center bg-green-800 text-white w-12 h-12 rounded-lg text-lg mb-6">
          <feature.icon />
        </div>
        <h5 className="text-xl font-bold mb-4">{feature.title}</h5>
        <p className="text-base font-normal leading-snug">{feature.desc}</p>
      </div>
    </div>
  );
};

FeaturedItem.propTypes = {
  feature: PropTypes.object.isRequired,
};

const Feature = () => {
  return (
    <section className="py-16 md:py-24 bg-dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex max-w-5xl justify-center mx-auto">
          <div className="px-6 mb-12 lg:mb-16 text-center">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl text-green-950 mb-4">
              Healthcare Services
            </h1>
            <p className="text-lg opacity-80 leading-7">
              Our medical facilities provide comprehensive healthcare services
              with a team of qualified medical professionals. We ensure the
              highest standards of health and wellness for all our students.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] max-w-3xl mx-auto mb-20">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl"
              style={{
                backgroundImage: `url(${medical1})`,
              }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {features.map((feature, i) => (
              <FeaturedItem key={i} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    {
      data: "24/7",
      title: "Medical Support",
    },
    {
      data: "100%",
      title: "Qualified Staff",
    },
    {
      data: "5+",
      title: "Medical Professionals",
    },
  ];

  return (
    <section className="py-16 bg-green-950">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-white text-3xl md:text-5xl font-semibold sm:text-4xl">
            Healthcare Excellence
          </h3>
          <p className="mt-3 text-gray-300">
            Our medical facilities are equipped with modern equipment and
            staffed by experienced healthcare professionals.
          </p>
        </div>
        <div className="mt-12">
          <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
            {stats.map((item, idx) => (
              <li
                key={idx}
                className="w-full text-center bg-green-900 px-12 py-4 rounded-lg sm:w-auto"
              >
                <h4 className="text-4xl text-white font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 text-gray-300 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState("");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = [
    {
      src: medical3,
      alt: "Medical facility entrance",
      className: "md:col-span-4 md:h-[404px] h-[277px]",
    },
    {
      src: img,
      alt: "Medical staff at work",
      className: "md:col-span-8 md:h-[404px] h-[277px]",
    },

    {
      src: medical1,
      alt: "Treatment room",
      className: "h-[277px]",
    },

    {
      src: medical3,
      alt: "Medical equipment",
      className: "h-[277px]",
    },

    {
      src: medical1,
      alt: "Consultation room",
      className: "h-[277px]",
    },

  ];

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage("");
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5 lg:pb-16 pb-10">
          <h2 className="w-full text-center text-gray-900 text-5xl font-bold font-sans leading-normal">
            Medical Infrastructure
          </h2>
          <div className="w-full text-center text-gray-600 text-lg font-light leading-8">
            Take a look at our state-of-the-art medical facilities and
            healthcare infrastructure.
          </div>
        </div>

        <div className="gallery">
          <div className="flex flex-col mb-10">
            <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
              {images.slice(0, 2).map((image, index) => (
                <div
                  key={index}
                  className={`${image.className} w-full rounded-3xl`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    onClick={() => openLightbox(image.src)}
                    className="gallery-image object-cover rounded-3xl hover:scale-105 hover:translate-y-[-10px] transition-all duration-700 ease-in-out mx-auto w-full h-full cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
              {images.slice(2).map((image, index) => (
                <div
                  key={index}
                  className={`${image.className} w-full rounded-3xl`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    onClick={() => openLightbox(image.src)}
                    className="gallery-image object-cover rounded-3xl hover:scale-105 hover:translate-y-[-10px] transition-all duration-700 ease-in-out mx-auto w-full h-full cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {isLightboxOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <span
              className="absolute top-5 right-8 text-white text-5xl cursor-pointer"
              onClick={closeLightbox}
            >
              &times;
            </span>
            <img
              src={lightboxImage}
              alt="Lightbox"
              className="max-w-[90%] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};
