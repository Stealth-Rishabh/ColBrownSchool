import HeroSlider from "./HeroSlider";
import Legacy from "./Legacy";
import FeatureImage from "./FeatureImage";
import AboutCB from "./AboutCB";
import AboutCBB from "./AboutCBB";
import VirtualTour from "./VirtualTour";
import Testimonials from "./Testimonials";
import SchoolEvents from "./SchoolEvents";
import Spotlight from "./Spotlight";
import TimeLine from "./TimeLine";
const Landing = () => {
  return (
    <>
      <HeroSlider />
      <FeatureImage />
      <Legacy />
      {/* <AboutCB /> */}
      <AboutCBB />
      <TimeLine />
      <VirtualTour />
      <Testimonials />
      <Spotlight />
      <SchoolEvents />
    </>
  );
};

export default Landing