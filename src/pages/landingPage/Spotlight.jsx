import spotlight from "../../assets/landing/spotlight.png";
import Container from "../../components/wrappers/Container";

export default function Spotlight() {
  return (
    <section className="bg-[#E4E4E4] ">
      <Container>
        <div className="relative">
          <div className="grid md:grid-cols-2 sm:gap-16 gap-5 items-start">
            
          <div className="relative">
            <div className="aspect-square max-h-[450px] mx-auto  relative rounded-lg overflow-hidden">
              <img
                src={spotlight}
                alt="Aerial view of Col. Brown School campus"
                className="object-contain h-full w-full "
              />
            </div>
            {/* Decorative accent */}
            {/* <div className="absolute -right-4 -bottom-4 w-24 h-48 bg-lime-600/20 -z-10" /> */}
          </div>


          <div className="space-y-6 max-w-2xl">
            <h2 className="space-y-1 after:h-[3px] after:w-10/12 after:bg-green-700/90 after:rounded-full after:inline-block after:mr-2">
              <span className="block sm:text-3xl text-xl font-serif">
                A Spotlight on
              </span>
              <span className="block sm:text-4xl text-3xl font-serif font-bold text-red-800">
                Col Brown School Alumni
              </span>
            </h2>
            {/* <div className="border-gray-300 h-10"/> </div> */}
            <p className="text-gray-600 leading-relaxed sm:text-xl text-justify">
              Colonel Brown Cambridge School was founded in March 1926 by Col.
              William Brown and Mrs. Brown, specifically for Indian boys. This
              institution is an English medium residential school that embraces
              all boys, irrespective of their caste, creed, or social status.
            </p>
            <p className="text-gray-600 leading-relaxed sm:text-xl text-justify">
              The school is renowned among educational institutions in India,
              recognized as one of the premier ICSE boarding schools in
              Dehradun. It draws students not only from various parts of India
              but also from across the globe.
            </p>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
