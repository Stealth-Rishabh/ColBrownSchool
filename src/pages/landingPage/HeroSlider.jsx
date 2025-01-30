"use client";
import { useEffect, useRef, useState, memo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import img1 from "../../assets/landing/bg1.webp";
import img2 from "../../assets/boarding-life/PastoralCare-banner.jpg";
// import { DownloadIcon } from "lucide-react";

const SlideContent = memo(({ img }) => {
  return (
    <div className="size-full max-w-[90%] sm:max-w-4xl items-center justify-center overflow-hidden sm:pt-8 absolute top-16 sm:top-[10%] left-[10%] sm:left-[8%] z-20 space-y-6">
      {/* <div className="mx-0 rounded-md">
        <p className="text-sm sm:text-xl text-white">
          🔔 Enroll now
        </p>
      </div> */}

      <div>
        <h1 className="text-4xl font-extrabold leading-relaxed text-white md:text-6xl lg:text-8xl sm:py-4 sm:tracking-wide drop-shadow-lg">
          {img.tagline.split(" ").map((word, index) => (
            <span
              key={index}
              className={
                index === 2 || index === 2
                  ? "text-black leading-relaxed bg-yellow-500 px-3"
                  : ""
              }
            >
              {word}
              {index === 2 ? <br /> : " "}
            </span>
          ))}
        </h1>
      </div>

      {/* <div className="hidden sm:block">
        <p className="text-xl font-semibold md:text-3xl text-slate-200 md:font-bold text-left max-w-[20rem] md:max-w-3xl">
          {img.highlight}
        </p>
      </div> */}
      <div className="sm:hidden block">
        <p className="text-2xl font-bold md:text-3xl text-white md:font-bold text-left max-w-[20rem] md:max-w-3xl">
          {img.highlights[0]}
        </p>
      </div>

      {/* <div className="flex flex-row gap-4">
        <button className="text-sm font-bold text-white bg-red-600 rounded px-6 py-3 sm:py-5 sm:px-10 lg:text-lg hover:bg-red-700">
          Explore Courses
        </button>
        <button className="hidden sm:block w-60 text-sm sm:text-base font-bold text-gray-500 bg-white py-3 sm:py-[21px] px-3 hover:bg-gray-100">
          DOWNLOAD BROCHURE
        </button>
        <button className="block sm:hidden sm:w-60 text-sm font-bold bg-white text-gray-500 py-[8px] px-5 flex flex-row justify-center items-center gap-2 hover:bg-gray-100">
          <span>BROCHURE</span>
          <DownloadIcon className="size-4 mt-1" />
        </button>
      </div> */}
    </div>
  );
});
SlideContent.displayName = "SlideContent";

const SlideImage = memo(({ img }) => (
  <>
    <img
      src={img.image}
      alt={img.tagline}
      className="object-cover  w-screen h-[420px] md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)] "
      loading="lazy"
    />
    <div className="absolute inset-0 z-20 bg-black opacity-50" />
  </>
));
SlideImage.displayName = "SlideImage";

const HeroSlider = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const plugin = useRef(
    Autoplay({
      delay: 8000,
      stopOnInteraction: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  );

  useEffect(() => {
    imgSlider.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const imgSlider = [
    {
      image: img1,
      tagline: "Give your Dreams wings to fly",
      highlight:
        "World-class curriculum, experienced faculty, and state-of-the-art classrooms.",
      highlights: [
        "World-class curriculum",
        "Experienced faculty",
        "State-of-the-art classrooms",
      ],
    },
    {
      image: img2,
      tagline: "Celebrate Every Special Moment",
      highlight: "Cultural festivals, workshops, and leadership opportunities.",
      highlights: [
        "Cultural festivals",
        "Workshops",
        "Leadership opportunities",
      ],
    },
    // {
    //   image: img1,
    //   tagline: "Fuel Your Passion Daily",
    //   highlight:
    //     "Top-notch facilities, diverse sports options, and vibrant athletic culture.",
    //   highlights: [
    //     "Top-notch facilities",
    //     "Diverse sports options",
    //     "Vibrant athletic culture",
    //   ],
    // },
    // {
    //   image: img1,
    //   tagline: "Innovate, Learn, Discover Together ",
    //   highlight:
    //     "Cutting-edge labs for practical learning, research, and discovery.",
    //   highlights: [
    //     "Cutting-edge labs",
    //     "Practical learning",
    //     "Research and discovery",
    //   ],
    // },
    // {
    //   image: img1,
    //   tagline: "Inspire, Engage, Create Together",
    //   highlight:
    //     "Modern auditorium for events, seminars, and cultural programs.",
    //   highlights: [
    //     "Modern auditorium",
    //     "Events and seminars",
    //     "Cultural programs",
    //   ],
    // },
    // {
    //   image: img1,
    //   tagline: "Launch Your Career Successfully",
    //   highlight: "Strong industry connections and 100% placement assistance.",
    //   highlights: [
    //     "Strong industry connections",
    //     "100% placement assistance",
    //     "Career launch support",
    //   ],
    // },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    draggable: true,
    loop: true,
    speed: 10,
  });

  const handleDrag = () => {
    if (!emblaApi) return;

    const progress = emblaApi.scrollProgress();
    const translateX = progress * 100;
    const items = emblaRef.current.children;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const offset = (i - emblaApi.selectedScrollSnap()) * 100;
      item.style.transform = `translateX(${translateX + offset}%)`;
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("scroll", handleDrag);

    return () => {
      emblaApi.off("scroll", handleDrag);
    };
  }, [emblaApi]);

  return (
    <section className="hero-section h-[420px] md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)] w-full relative">
      <Carousel
        ref={emblaRef}
        plugins={[plugin.current]}
        setApi={setApi}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
        options={{
          skipSnaps: false,
          inViewThreshold: 0.7,
          dragFree: false,
        }}
      >
        <CarouselContent>
          {imgSlider.map((img, index) => (
            <CarouselItem
              key={index}
              className="w-full sm:h-full relative h-[420px] md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)]"
            >
              <SlideImage img={img} />
              <SlideContent img={img} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute justify-center hidden mt-4 space-x-2 -rotate-90 sm:flex -right-0 bottom-28">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-4 h-[2px] rounded-sm ${
              index === current ? "bg-yellow-500" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(HeroSlider);
