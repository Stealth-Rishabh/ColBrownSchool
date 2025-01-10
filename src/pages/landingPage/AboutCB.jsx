import video from "../../assets/landing/video.webp";
import Container from "../../components/wrappers/Container";
export default function AboutCB() {
  return (
    <Container>
      <div className="relative">
        <div className="grid lg:grid-cols-2 sm:gap-16 gap-5 items-start">
          <div className="space-y-6 max-w-2xl">
            <h2 className="space-y-1 after:h-[4px] after:w-10/12 after:bg-green-700 after:rounded-full after:inline-block after:mr-2">
              <span className="block sm:text-3xl text-xl font-serif">
                About the Legacy of
              </span>
              <span className="block sm:text-5xl text-3xl font-serif font-semibold">
                Col. Brown School
              </span>
            </h2>
            {/* <div className="border-gray-300 h-10"/> </div> */}
            <p className="text-gray-600 leading-relaxed sm:text-xl text-justify">
              Colonel Brown Cambridge School was established in March 1926 by
              Col. William Brown and Mrs. Brown for Indian boys. It is an
              English medium residential school, welcoming all boys regardless
              of caste, creed, or social status.
            </p>
            <p className="text-gray-600 leading-relaxed sm:text-xl text-justify">
              The school holds a prestigious place among educational
              institutions in India, being one of the top ICSE boarding schools
              in Dehradun. It attracts students not only from across India but
              also from around the world.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <img
                src={video}
                alt="Aerial view of Col. Brown School campus"
                className="object-cover h-full w-full"
              />
            </div>
            {/* Decorative accent */}
            {/* <div className="absolute -right-4 -bottom-4 w-24 h-48 bg-lime-600/20 -z-10" /> */}
          </div>
        </div>
      </div>
    </Container>
  );
}
