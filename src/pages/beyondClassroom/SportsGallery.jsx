import { useState } from "react";
import Container from "../../components/wrappers/Container";
import Heading from "../../components/Heading";
import { useParams } from "react-router-dom";
import { sportsData } from "../../data/sportsData";
import { X } from "lucide-react";

const SportsGallery = () => {
  const { sport } = useParams(); // This will get the sport from the URL
  const sportInfo = sportsData[sport];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  if (!sportInfo) {
    return <div>Sport not found</div>;
  }

  const openModal = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
    document.body.style.overflow = "unset";
  };

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
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                className="h-full object-cover w-full rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                src={src || "https://placehold.co/600x400"}
                alt={`${sportInfo.title} image ${index + 1}`}
                onClick={() => openModal(src)}
              />
            </div>
          ))}
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              src={selectedImage}
              alt="Selected sport"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default SportsGallery;
