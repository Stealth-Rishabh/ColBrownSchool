import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import hostel1 from "../../assets/boarding-life/Hostel1.webp";
import hostel2 from "../../assets/boarding-life/Hostel2.webp";
import hostel3 from "../../assets/boarding-life/Hostel3.webp";
import hostel4 from "../../assets/boarding-life/Hostel4.webp";
import hostel5 from "../../assets/boarding-life/Hostel5.webp";
import img from "../../assets/boarding-life/Hostel (2).webp";
import hostel from "../../assets/boarding-life/Hostel-Banner.webp";
import PropTypes from "prop-types";
import { Home, Users, Wifi } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Seven Boarding Houses",
    desc: "McIntosh House, India House, Ireland House, Colonel's House, Longford House, Patel House and Patricia House - each providing a unique living experience.",
  },
  {
    icon: Users,
    title: "Dedicated House Masters",
    desc: "Each house is under the personal supervision of a full-time resident House Master or House Mother ensuring student wellbeing.",
  },
  // {
  //   icon: Wifi,
  //   title: "Modern Facilities",
  //   desc: "Dormitories with attached western-style bathrooms, common rooms for recreation, and essential amenities for comfortable living.",
  // },
  {
    icon: Home,
    title: "Comfortable Living Spaces",
    desc: "Our spacious and well-maintained hostel rooms are thoughtfully arranged to ensure a balance of privacy and interaction, fostering a sense of responsibility and orderliness.",
  },
  {
    icon: Users,
    title: "Nutritious Meals",
    desc: "The school dining hall serves a variety of wholesome and nutritious meals, carefully planned to cater to growing children's dietary needs with a focus on hygiene.",
  },
  {
    icon: Wifi,
    title: "Holistic Development",
    desc: "Hostel life encourages participation in cultural, academic, and recreational activities, helping students develop well-rounded personalities.",
  },
  {
    icon: Home,
    title: "Round-the-Clock Care",
    desc: "Our hostel staff and wardens ensure that every student feels supported and cared for, with 24/7 monitoring for a safe environment.",
  },
];

const Hostel = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/boarding-life/hostel", label: "Boarding Life" },
    { label: "Hostel" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Boarding Houses"
        imageSrc={hostel}
        imageAlt="Col. Brown's Boarding Houses"
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

export default Hostel;

const FeaturedItem = ({ feature, index }) => {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2 h-full">
      <div className="text-center flex flex-col h-full bg-green-50 mx-5 rounded-lg hover:scale-105 hover:translate-y-2 transition-all duration-300">
        <div className="flex flex-col items-center p-6 lg:p-12 !py-7">
          <div className="flex justify-center items-center bg-green-800 text-white w-12 h-12 rounded-lg text-lg mb-6">
            <feature.icon />
          </div>
          <h5 className="text-xl font-bold mb-4">{feature.title}</h5>
          <p
            className={`text-base font-normal leading-snug ${
              index === 0 ? "text-green-700 text-lg" : ""
            }`}
          >
            {feature.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

FeaturedItem.propTypes = {
  feature: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Feature = () => {
  return (
    <section className="py-12 md:pt-20 bg-dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex max-w-5xl justify-center mx-auto">
          <div className="px-6 mb-12 lg:mb-16 text-center">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl text-green-950 mb-4">
              Our Boarding Houses
            </h1>
            <p className="text-lg opacity-80 leading-7">
              Six distinguished boarding houses, each with its unique character
              and tradition, provide a nurturing home away from home for our
              students under the care of dedicated house masters.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-6 sm:gap-y-16 gap-y-8">
          <div className="col-span-6 text-center">
            <img
              src={img}
              alt="Hostel Building"
              className="object-cover w-full h-full max-w-3xl mx-auto rounded-xl max-h-[400px]"
            />
          </div>
          <div className="col-span-6 grid grid-cols-6 gap-y-8 sm:gap-y-16">
            {features.map((feature, i) => (
              <FeaturedItem feature={feature} index={i} key={i} />
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
      data: "7",
      title: "Boarding Houses",
    },
    {
      data: "24/7",
      title: "House Master Support",
    },
    {
      data: "100%",
      title: "Modern Facilities",
    },
  ];

  return (
    <section className="py-16 bg-green-950">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-white text-3xl md:text-5xl font-semibold sm:text-4xl">
            Boarding Life
          </h3>
          <p className="mt-3 text-gray-300">
            Experience the tradition of excellence in our historic boarding
            houses, each offering modern amenities and dedicated supervision.
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
      src: hostel1,
      alt: "McIntosh House",
      className: "md:col-span-4 md:h-[404px] h-[277px]",
    },
    {
      src: hostel5,
      alt: "India House",
      className: "md:col-span-8 md:h-[404px] h-[277px]",
    },
    {
      src: hostel2,
      alt: "Ireland House",
      className: "h-[277px]",
    },
    {
      src: hostel3,
      alt: "Colonel's House",
      className: "h-[277px]",
    },
    {
      src: hostel4,
      alt: "Patel House",
      className: "h-[277px]",
    },
  ];

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxImage("");
    setIsLightboxOpen(false);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5 lg:pb-16 pb-10">
          <h2 className="w-full text-center text-gray-900 text-5xl font-bold font-sans leading-normal">
            Our Houses
          </h2>
          <div className="w-full text-center text-gray-600 text-lg font-light leading-8">
            Explore our six distinguished boarding houses, each offering
            comfortable dormitories with modern amenities.
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
