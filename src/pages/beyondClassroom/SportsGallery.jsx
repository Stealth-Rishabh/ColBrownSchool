import React from "react";
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import { useParams } from "react-router-dom";
import { sportsData } from "../../data/sportsData";

const SportsGallery = () => {
  const { sport } = useParams(); // This will get the sport from the URL
  const sportInfo = sportsData[sport];

  if (!sportInfo) {
    return <div>Sport not found</div>;
  }

  return (
    <section className="bg-green-50">
      <Container>
        <Heading
          title={sportInfo.title}
          titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
          subtitle={sportInfo.description}
          subtitleClassName="text-gray-800"
          className="mx-auto"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sportInfo.images.map((src, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={src || "https://placehold.co/600x400"}
                alt={`${sportInfo.title} image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SportsGallery;
