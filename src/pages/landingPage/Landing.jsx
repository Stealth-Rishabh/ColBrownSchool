import HeroSlider from "./HeroSlider";
import Legacy from "./Legacy";
import FeatureImage from "./FeatureImage";
import AboutCB from "./AboutCB";
import VirtualTour from "./VirtualTour";
import Testimonials from "./Testimonials";
import SchoolEvents from "./SchoolEvents";
const Landing = () => {
  return (
    <>
      <HeroSlider />
      <FeatureImage />
      <Legacy />
      <AboutCB />
      <VirtualTour />
      <Testimonials />
      <SchoolEvents />
    </>
  );
};

export default Landing