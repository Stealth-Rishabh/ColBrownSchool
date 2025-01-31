import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "../../assets/landing/bg1.webp";
import edu1 from "../../assets/academics/Smart Classrooms.jpg";
import edu2 from "../../assets/about/Education.webp";
import mili1 from "../../assets/about/military1.webp";
import mili2 from "../../assets/about/military2.webp";
import sports1 from "../../assets/about/Sports (1).webp";
import sports2 from "../../assets/about/Sports (2).webp";
const achievementsData = {
  education: {
    content:
      "Colonel Brown's approach to education was revolutionary for its time. He believed in equal opportunities for all students, regardless of their background.",
    images: [edu1, edu2],
  },
  preIMA: {
    content:
      "CBS has a long-standing tradition of preparing students for the Indian Military Academy. Our rigorous training program has produced numerous successful candidates.",
    images: [mili1, mili2],
  },
  sports: {
    content:
      "Sports have always been an integral part of CBS. Our proudest achievement is winning the All India Hockey Championship, showcasing the school's commitment to athletic excellence.",
    images: [sports1, sports2],
  },
};

const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-4xl font-semibold mb-8 text-center">
          Achievements and Legacy
        </h2>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 bg-gray-200">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="preIMA">Pre-IMA</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
          </TabsList>
          {Object.entries(achievementsData).map(
            ([key, { content, images }]) => (
              <TabsContent key={key} value={key}>
                <Card>
                  <CardContent className="pt-6 relative">
                    <p className="mb-6">{content}</p>
                    <Carousel>
                      <CarouselContent>
                        {images.map((src, index) => (
                          <CarouselItem key={index}>
                            <img
                              src={src || "/placeholder.svg"}
                              alt={`${key} image ${index + 1}`}
                              className="w-full h-96 object-cover rounded-lg"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-[2%] z-10" />
                      <CarouselNext className="absolute right-[2%] z-10" />
                    </Carousel>
                  </CardContent>
                </Card>
              </TabsContent>
            )
          )}
        </Tabs>
      </div>
    </section>
  );
};

export default AchievementsSection;
