import HeroSlider from "./HeroSlider";
import Legacy from "./Legacy";
import FeatureImage from "./FeatureImage";

import AboutCBB from "./AboutCBB";
import VirtualTour from "./VirtualTour";
import Testimonials from "./Testimonials";
import SchoolEvents from "./SchoolEvents";
import Spotlight from "./Spotlight";
import TimeLine from "./TimeLine";
import { testimonials } from "./testimonialData";
const Landing = () => {
  return (
    <div className="overflow-hidden">
      <HeroSlider />
      <FeatureImage />
      <Legacy />
      {/* <AboutCB /> */}
      <AboutCBB />
      <TimeLine />
      <VirtualTour />
      <Testimonials
        testimonialList={testimonials}
        title="Parent Testimonials"
        subtitle="Our students' parents have shared their experiences, emphasizing the importance of both paid and unpaid roles in shaping their children's careers."
      />
      <Spotlight />
      <SchoolEvents />
    </div>
  );
};

export default Landing;
