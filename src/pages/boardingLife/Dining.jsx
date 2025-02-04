import { useState } from "react";
import ImgAndBreadcrumb from "../../components/ImgAndBreadcrumb";
import img from "../../assets/landing/bg1.webp";
import dining1 from "../../assets/boarding-life/Dinning (1).webp";
import dining2 from "../../assets/boarding-life/Dinning (2).webp";
import dining3 from "../../assets/boarding-life/Dinning (3).webp";
import dining4 from "../../assets/boarding-life/Dinning (4).webp";
import dining5 from "../../assets/boarding-life/Dinning (5).webp";
import dining6 from "../../assets/boarding-life/Dinning (6).webp";
import dining7 from "../../assets/boarding-life/Dinning (7).webp";

import PropTypes from "prop-types";
import { Utensils, Coffee, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const features = [
  {
    icon: Utensils,
    title: "Nutritious Meals",
    desc: "Our menu is carefully crafted with emphasis on nutrition and care, featuring balanced meals prepared by experienced chefs.",
  },
  {
    icon: Coffee,
    title: "Balanced Diet",
    desc: "From whole grain cereals to lean proteins, we ensure a perfect blend of nutrients essential for growing students.",
  },
  {
    icon: Clock,
    title: "Regular Meal Times",
    desc: "Structured meal schedule including Chota Haziri, breakfast, lunch, evening snacks, and dinner to maintain healthy eating habits.",
  },
];

const mealSchedule = [
  {
    time: "Early Morning (After PT)",
    meal: "Chota Haziri",
    items: ["Milk with brown bread and honey"],
  },
  {
    time: "Breakfast",
    meal: "Balanced Breakfast",
    items: [
      "Whole grain cereals",
      "Protein rich grains and dairy",
      "Fresh Fruit",
    ],
  },
  {
    time: "Lunch/Dinner",
    meal: "Wholesome Main Meals",
    items: [
      "Lentil, rice and vegetable combination",
      "Lean proteins like chicken, mutton and Paneer",
      "Healthy fats from nuts and seeds",
    ],
  },
  {
    time: "Evening",
    meal: "Nourishing Snacks",
    items: [
      "Fresh fruits and vegetable snacks",
      "Whole grain sandwiches and pastries",
    ],
  },
];

const Dining = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/boarding-life/dining", label: "Boarding Life" },
    { label: "Dining" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Dining Facilities"
        imageSrc={dining3}
        imageAlt="Our Modern Dining Facilities"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="bg-white pt-12">
        {/* <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Nutrition and Care</h2>
            <p className="text-gray-600">
              At our boarding school, we prioritize student's health and
              wellbeing through nutritious meals. Our menu is carefully crafted
              to provide balanced nutrition while ensuring delicious taste that
              our students love.
            </p>
          </div>
        </div> */}
        <Feature />
        <Stats />
        <MealTable />
        <Gallery />
      </section>
    </section>
  );
};

export default Dining;

const FeaturedItem = ({ feature }) => {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2 hover:scale-105 hover:translate-y-2 transition-all duration-300">
      <div className="text-center flex flex-col items-center p-6 lg:p-12 !py-7 bg-green-50 mx-5 rounded-lg h-full">
        <div className="flex justify-center items-center bg-green-800 text-white w-12 h-12 max-h-12 rounded-lg text-lg mb-6 flex-grow">
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
    <section className="py-12 md:pt-20 bg-dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex max-w-5xl justify-center mx-auto">
          <div className="px-6 mb-12 lg:mb-16 text-center">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl text-green-950 mb-4">
              Dining Experience
            </h1>
            <p className="text-lg opacity-80 leading-7">
              Our dining facilities provide nutritious and delicious meals in a
              comfortable environment. We cater to various dietary requirements
              and ensure the highest standards of food quality.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-6 sm:gap-y-16 gap-y-8">
          <div className="col-span-6 text-center">
            <img
              src={dining2}
              alt="Dining Hall"
              className="object-cover w-full h-full max-w-3xl mx-auto rounded-xl min-h-[400px]"
            />
          </div>
          {features.map((feature, i) => (
            <div className="col-span-6 md:col-span-3 lg:col-span-2 flex" key={i}>
              <FeaturedItem feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MealTable = () => {
  return (
    <div className="py-12 sm:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h3 className="text-green-950 text-3xl  md:text-5xl font-semibold sm:text-4xl">
            Daily Meal Schedule
          </h3>
          <p className="mt-3 text-gray-600">
            Our dining facilities provide high-quality meals prepared by
            professional chefs
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Table>
            {/* <TableCaption className="text-green-800 py-2">Our nutritious daily meal plan for students</TableCaption> */}
            <TableHeader>
              <TableRow className="bg-green-800 hover:bg-green-900">
                <TableHead className="text-white">Time</TableHead>
                <TableHead className="text-white">Meal</TableHead>
                <TableHead className="text-white">Menu Items</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mealSchedule.map((schedule, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
                >
                  <TableCell className="font-medium text-green-950">
                    {schedule.time}
                  </TableCell>
                  <TableCell className="text-green-800">
                    {schedule.meal}
                  </TableCell>
                  <TableCell>
                    <ul className="list-decimal list-inside text-black">
                      {schedule.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    {
      data: "6",
      title: "Meals Daily",
    },
    {
      data: "100%",
      title: "Fresh Ingredients",
    },
    {
      data: "24/7",
      title: "Kitchen Service",
    },
  ];

  return (
    <section className="py-16 bg-green-950">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-white text-3xl md:text-5xl font-semibold sm:text-4xl">
            Dining Excellence
          </h3>
          <p className="mt-3 text-gray-300">
            Our dining facilities provide high-quality meals prepared by
            professional chefs
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
      src: dining4,
      alt: "Modern dining hall",
      className: "md:col-span-4 md:h-[404px] h-[277px]",
    },
    {
      src: dining1,
      alt: "Kitchen facilities",
      className: "md:col-span-8 md:h-[404px] h-[277px]",
    },
    {
      src: dining5,
      alt: "Food preparation",
      className: "h-[277px]",
    },
    {
      src: dining6,
      alt: "Dining experience",
      className: "h-[277px]",
    },
    {
      src: dining7,
      alt: "Meal service",
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
            Dining Facilities
          </h2>
          <div className="w-full text-center text-gray-600 text-lg font-light leading-8">
            Take a look at our modern dining facilities and food preparation
            areas.
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
