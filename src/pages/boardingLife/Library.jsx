import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/boarding-life/Library-Banner.webp";
import library from "../../assets/boarding-life/Library.jpg";
import library1 from "../../assets/academics/pedagogy (2).webp";
import library2 from "../../assets/academics/pedagogy (3).webp";
import library3 from "../../assets/academics/pedagogy (4).webp";
import library4 from "../../assets/academics/pedagogy (8).webp";
import PropTypes from "prop-types";
import { BookOpen, Laptop, Users, BookMarked } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Extensive Collection",
    desc: "The library houses a vast array of books across genres, including academic textbooks, reference materials, fiction, non-fiction, biographies, and periodicals.",
  },
  {
    icon: Laptop,
    title: "Digital Resources",
    desc: "In addition to traditional books, we provide access to e-books, online journals, and digital databases to meet the demands of modern learning.",
  },
  {
    icon: Users,
    title: "Comfortable Environment",
    desc: "The library offers a serene and conducive environment with comfortable seating, reading zones, and dedicated areas for group discussions and project work.",
  },
  {
    icon: BookMarked,
    title: "Support for Research",
    desc: "Students can engage in research activities with the help of well-organized resources and guidance from our library staff.",
  },
];

const Library = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/boarding-life/library", label: "Boarding Life" },
    { label: "Library" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Library"
        imageSrc={img}
        imageAlt="Col. Brown's Library"
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

export default Library;

const FeaturedItem = ({ feature, index }) => {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2 hover:scale-105 hover:translate-y-2 transition-all duration-300">
      <div className="text-center flex flex-col items-center p-6 lg:p-12 !py-7 bg-green-50 mx-5 rounded-lg">
        <div className="flex justify-center items-center bg-green-800 text-white w-12 h-12 rounded-lg text-lg mb-6">
          <feature.icon />
        </div>
        <h5 className="text-xl font-bold mb-4">{feature.title}</h5>
        <p className={`text-base font-light leading-snug`}>{feature.desc}</p>
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
              Our Library
            </h1>
            <p className="text-lg opacity-80 leading-7">
              Our school takes pride in exceptional library featuring a vast and
              rare collection of Books, journals, Magazine, Encyclopedias. Our
              library fosters a love for reading in students.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-6 sm:gap-y-16 gap-y-8">
          <div className="col-span-6 text-center">
            <div
              className="bg-top bg-no-repeat bg-cover max-w-3xl mx-auto rounded-xl h-full min-h-[400px]"
              style={{
                backgroundImage: `url(${library})`,
              }}
            />
          </div>
          {features.map((feature, i) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-3" key={i}>
              <FeaturedItem feature={feature} index={i} />
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
      data: "10K+",
      title: "Books Collection",
    },
    {
      data: "24/7",
      title: "Digital Access",
    },
    {
      data: "100%",
      title: "Student Engagement",
    },
  ];

  return (
    <section className="py-16 bg-green-950">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-white text-3xl md:text-5xl font-semibold sm:text-4xl">
            Library Resources
          </h3>
          <p className="mt-3 text-gray-300">
            We actively promote reading through book clubs, storytelling
            sessions, and literary competitions, fostering a culture of
            curiosity and creativity.
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
      src: library4,
      alt: "Main Reading Area",
      className: "md:col-span-4 md:h-[404px] h-[277px]",
    },
    {
      src: img,
      alt: "Digital Resource Center",
      className: "md:col-span-8 md:h-[404px] h-[277px]",
    },
    {
      src: library2,
      alt: "Reference Section",
      className: "h-[277px]",
    },
    {
      src: library3,
      alt: "Study Area",
      className: "h-[277px]",
    },
    {
      src: library1,
      alt: "Group Discussion Zone",
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
            Library Spaces
          </h2>
          <div className="w-full text-center text-gray-600 text-lg font-light leading-8">
            The library at Col. Brown School is a space where students can
            explore ideas, enhance their knowledge, and cultivate the skills
            essential for success in academics and beyond.
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
