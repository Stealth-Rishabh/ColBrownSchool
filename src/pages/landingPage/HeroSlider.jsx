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

// Preload critical image immediately
const preloadImage = (src) => {
  if (typeof window !== "undefined") {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    link.type = "image/webp"; // Specify image type if possible
    document.head.appendChild(link);
  }
};

const HeroSlider = () => {
  useEffect(() => {
    // Preload the first image for faster LCP
    preloadImage(img1);
  }, []);

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

  const imgSlider = [
    {
      image: img1,
      imageSmall: "/assets/landing/bg1-small.webp", // Provide a smaller image for responsive
      tagline: "Give your Dreams wings to fly",
      highlights: [
        "World-class curriculum",
        "Experienced faculty",
        "State-of-the-art classrooms",
      ],
    },
    {
      image: img2,
      imageSmall: "/assets/boarding-life/PastoralCare-banner-small.jpg", // Smaller image
      tagline: "Celebrate Every Special Moment",
      highlights: [
        "Cultural festivals",
        "Workshops",
        "Leadership opportunities",
      ],
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    draggable: true,
    loop: true,
    speed: 10,
  });

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
              <SlideImage img={img} index={index} />
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

const SlideContent = memo(({ img }) => {
  return (
    <div className="size-full max-w-[90%] sm:max-w-4xl items-center justify-center overflow-hidden sm:pt-8 absolute top-16 sm:top-[10%] left-[10%] sm:left-[8%] z-20 space-y-6">
      <h1 className="text-4xl font-extrabold leading-relaxed text-white md:text-6xl lg:text-8xl sm:py-4 sm:tracking-wide drop-shadow-lg">
        {img.tagline.split(" ").map((word, index) => (
          <span
            key={index}
            className={
              index === 2
                ? "text-black leading-relaxed sm:leading-[130px] bg-yellow-500 px-3 block w-fit mt-5 mb-2"
                : ""
            }
          >
            {word}{" "}
          </span>
        ))}
      </h1>
      <div className="sm:hidden block">
        <p className="text-2xl font-bold md:text-3xl text-white md:font-bold text-left max-w-[20rem] md:max-w-3xl">
          {img.highlights[0]}
        </p>
      </div>
    </div>
  );
});
SlideContent.displayName = "SlideContent";

const SlideImage = memo(({ img, index }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (index === 0) return; // Skip for the first image as it's preloaded
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgElement = entry.target;
            imgElement.src = imgElement.dataset.src;
            observerInstance.unobserve(imgElement);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [img.image, index]);

  return (
    <>
      <img
        ref={imgRef}
        data-src={img.image}
        alt={img.tagline}
        className={`object-cover w-screen h-[420px] md:h-[92v] lg:h-[95vh] transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading={index === 0 ? "eager" : "lazy"} // Eager loading for the first image
        fetchPriority={index === 0 ? "high" : "auto"} // High priority for first image
        decoding="async"
        src={index === 0 ? img.image : undefined} // Set src for the first image
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          console.error("Image load error:", e);
          // Consider implementing a fallback image here
        }}
        srcSet={`${img.image} 1920w, ${img.imageSmall} 768w`}
        sizes="(max-width: 768px) 100vw, 1920px"
      />
      {!loaded && index !== 0 && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <div className="absolute inset-0 z-20 bg-black opacity-50" />
    </>
  );
});
SlideImage.displayName = "SlideImage";

export default memo(HeroSlider);
