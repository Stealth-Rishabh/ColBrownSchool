import WordPullUp from "../components/ui/word-pull-up"; // Assuming this component exists
import WordFadeIn from "../components/ui/word-fade-in";
// import GradualSpacing from '../components/ui/gradual-spacing';  // Assuming this component exists

const Heading = ({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}) => {
  return (
    <div
      className={`pb-8 sm:pb-16 md:pb-20 space-y-4 sm:space-y-8 ${className}`}
    >
      {title && (
        <WordPullUp
          className={`text-center text-3xl font-bold sm:font-bold md:font-extrabold sm:text-5xl lg:text-6xl ${titleClassName}`}
          words={title}
        />
      )}

      {subtitle && (
        <WordFadeIn
          className={` max-w-screen-md text-base text-center  sm:text-lg lg:text-xl font-medium sm:font-semibold mx-auto ${subtitleClassName}`}
          words={subtitle}
          delay={0.05}
        />
      )}
    </div>
  );
};

export default Heading;
