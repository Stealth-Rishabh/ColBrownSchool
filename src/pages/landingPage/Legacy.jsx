import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import img1 from "../../assets/landing/Hero1.png";
import Container from "../../components/wrappers/Container";
export default function Legacy() {
  return (
    <section className="bg-green-950">
      <Container>
        <div className="flex gap-8 lg:gap-24">
          <div className="flex-1 space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <p className="sm:text-lg font-medium text-white">Legacy</p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
                A Century of Excellence in Education
              </h1>
              <p className="text-gray-300 sm:text-lg dark:text-gray-200">
                At Col Brown, we are dedicated to nurturing the minds of future
                leaders. Our mission is to foster a community of respect,
                integrity, and academic achievement.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">
                  Core Values
                </h2>
                <p className="text-gray-300 sm:text-lg dark:text-gray-200">
                  Integrity, Respect, Excellence, and Innovation guide our
                  educational philosophy.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">
                  Educational Philosophy
                </h2>
                <p className="text-gray-300 sm:text-lg dark:text-gray-200">
                  We believe in holistic development, preparing students for
                  real-world challenges.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">Learn More</Button>
              <Button className="group border-white border">
                Sign Up{" "}
                <ArrowRightIcon className="w-4 h-4 mt-1 group-hover:ml-2 duration-300 transition-all" />
              </Button>
            </div>
          </div>
          <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden drop-shadow-lg">
            <img
              src={img1}
              alt="Educational Excellence"
              className="object-cover scale-125 w-full h-full hover:scale-150 duration-300 transition-all"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
