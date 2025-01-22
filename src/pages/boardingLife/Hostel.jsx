import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/landing/bg1.webp";
import PropTypes from "prop-types";
import { Home, Users, Wifi } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Modern Accommodation",
    desc: "Comfortable and well-furnished rooms designed to provide a home-like environment for all our resident students.",
  },
  {
    icon: Users,
    title: "Resident Wardens",
    desc: "Experienced wardens provide supervision and support, ensuring a safe and nurturing living environment.",
  },
  {
    icon: Wifi,
    title: "Modern Amenities",
    desc: "Access to Wi-Fi, study areas, recreation rooms, and other facilities for a comfortable boarding experience.",
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
        title="Hostel Facilities"
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

export default Hostel;

const FeaturedItem = ({ feature }) => {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
      <div className="text-center flex flex-col items-center p-6 lg:p-12 xl:p-20">
        <div className="flex justify-center items-center bg-green-800 text-white w-12 h-12 rounded-lg text-lg mb-6">
          <feature.icon />
        </div>
        <h5 className="text-xl font-bold mb-4">{feature.title}</h5>
        <p className="text-base font-light leading-snug">{feature.desc}</p>
      </div>
    </div>
  );
};

FeaturedItem.propTypes = {
  feature: PropTypes.object.isRequired,
};

const Feature = () => {
  return (
    <section className="py-12 md:pt-20 bg-dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex max-w-5xl justify-center mx-auto">
          <div className="px-6 mb-12 lg:mb-16 text-center">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl text-green-950 mb-4">
              Residential Facilities
            </h1>
            <p className="text-lg opacity-80 leading-7">
              Our hostel facilities provide a comfortable and nurturing
              environment where students can thrive. We ensure every aspect of
              residential life supports academic success and personal growth.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-6 text-center">
            <div
              className="bg-top bg-no-repeat bg-cover rounded-xl h-full min-h-[400px]"
              style={{
                backgroundImage:
                  "url(https://cbs.edustoke.com/wp-content/uploads/2024/11/572x400_18.jpg)",
              }}
            />
          </div>
          {features.map((feature, i) => (
            <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
              <FeaturedItem feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    {
      data: "500+",
      title: "Resident Students",
    },
    {
      data: "24/7",
      title: "Warden Support",
    },
    {
      data: "100%",
      title: "Room Occupancy",
    },
  ];

  return (
    <section className="py-16 bg-green-950">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-white text-3xl md:text-5xl font-semibold sm:text-4xl">
            Hostel Life
          </h3>
          <p className="mt-3 text-gray-300">
            Experience comfortable living with modern amenities and
            round-the-clock support in our residential facilities.
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
      src: "https://pagedone.io/asset/uploads/1713942989.png",
      alt: "Student dormitory",
      className: "md:col-span-4 md:h-[404px] h-[277px]",
    },
    {
      src: "https://pagedone.io/asset/uploads/1713943004.png",
      alt: "Common room", 
      className: "md:col-span-8 md:h-[404px] h-[277px]",
    },
    {
      src: "https://pagedone.io/asset/uploads/1713943024.png",
      alt: "Study area",
      className: "h-[277px]",
    },
    {
      src: "https://pagedone.io/asset/uploads/1713943039.png",
      alt: "Recreation room",
      className: "h-[277px]",
    },
    {
      src: "https://pagedone.io/asset/uploads/1713943054.png",
      alt: "Hostel facilities",
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
            Hostel Facilities
          </h2>
          <div className="w-full text-center text-gray-600 text-lg font-light leading-8">
            Take a look at our modern hostel facilities and accommodation areas.
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
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full cursor-pointer"
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
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full cursor-pointer"
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
