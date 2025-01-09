import Container from "../../components/wrappers/Container";
import boarding from "../../assets/landing/boarding.png";
import academics from "../../assets/landing/academics.png";
import sports from "../../assets/landing/sports.png";
import coCurricular from "../../assets/landing/co-curricular.png";
const FeatureImage = () => {
  const data = [
    {
      title: "Boarding Life",
      image: boarding,
      path: "/boarding",
    },
    {
      title: "Academics",
      image: academics,
      path: "/academic",
    },
    {
      title: "Sports",
      image: sports,
      path: "/sports",
    },
    {
      title: "Co-Curricular",
      image: coCurricular,
      path: "/co-curricular",
    },
  ];
  return (
    <Container className="-mt-20 md:-mt-40 z-10 relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-0 gap-4">
        {data.map((item, index) => (
          <div key={index} className="aspect-[3/4] overflow-hidden rounded-t-2xl shadow-2xl sm:shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeatureImage;
