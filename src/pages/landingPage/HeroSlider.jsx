"use client";
import { useEffect, useRef, useState, memo, Suspense } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "../../assets/landing/bg1.webp";
import img2 from "../../assets/boarding-life/PastoralCare-banner.jpg";
// import img1Small from "../../assets/landing/bg1-small.webp";
// import img2Small from "../../assets/boarding-life/PastoralCare-banner-small.jpg";

const LoadingFallback = () => (
  <div className="h-[420px] md:h-[92vh] lg:h-[95vh] w-full bg-gray-200 animate-pulse flex items-center justify-center">
    <div className="text-gray-600">Loading...</div>
  </div>
);

const HeroSlider = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      draggable: true,
      loop: true,
      speed: 10,
    },
    [
      Autoplay({
        delay: 8000,
        stopOnInteraction: true,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }),
    ]
  );

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      setApi(emblaApi);
      setCount(emblaApi.slideNodes().length);

      // Subscribe to carousel events
      emblaApi.on("select", () => {
        setCurrent(emblaApi.selectedScrollSnap());
      });

      return () => {
        emblaApi.off("select");
      };
    }
  }, [emblaApi]);

  const imgSlider = [
    {
      image: img1,
      imageSmall: img1,
      tagline: "Give your Dreams wings to fly",
      highlights: [
        "World-class curriculum",
        "Experienced faculty",
        "State-of-the-art classrooms",
      ],
    },
    {
      image: img2,
      imageSmall: img2,
      tagline: "Celebrate Every Special Moment",
      highlights: [
        "Cultural festivals",
        "Workshops",
        "Leadership opportunities",
      ],
    },
  ];

  if (!mounted) return <LoadingFallback />;

  return (
    <section className="hero-section h-[350px] md:h-[92vh] lg:h-[80vh] w-full relative">
      <Suspense fallback={<LoadingFallback />}>
        <div ref={emblaRef} className="overflow-hidden w-full h-full">
          <div className="flex h-full">
            {imgSlider.map((img, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 relative h-full"
              >
                <SlideImage img={img} index={index} />
                <SlideContent img={img} />
              </div>
            ))}
          </div>
        </div>
      </Suspense>

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
    <div className="size-full max-w-[90%] sm:max-w-4xl items-center justify-center overflow-hidden sm:pt-8 absolute top-16 sm:top-[15%] left-[10%] sm:left-[8%] z-20 space-y-6">
      <h1 className="text-4xl font-extrabold tracking-wide text-white md:text-6xl lg:text-8xl sm:py-4 drop-shadow-lg">
        {img.tagline.split(" ").map((word, index) => (
          <span key={index} className="inline-block mr-2 sm:mr-5">
            {index % 2 === 0 ? (
              <span className="text-white">{word}</span>
            ) : (
              <span className="text-yellow-500">{word}</span>
            )}
          </span>
        ))}
      </h1>
      <div className="">
        <p className="text-2xl font-bold md:text-4xl text-white md:font-bold text-left max-w-[20rem] md:max-w-3xl">
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
    if (index === 0) return;

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
        rootMargin: "50px",
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
        width={1920}
        height={1080}
        className={`object-cover w-full h-full transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading={index === 0 ? "eager" : "lazy"}
        fetchPriority={index === 0 ? "high" : "auto"}
        decoding="async"
        src={index === 0 ? img.image : undefined}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          console.error("Image load error:", e);
        }}
        srcSet={`${img.image} 1920w, ${img.imageSmall} 768w`}
        sizes="100vw"
      />
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <div className="absolute inset-0 bg-black opacity-50" />
    </>
  );
});
SlideImage.displayName = "SlideImage";

export default memo(HeroSlider);
