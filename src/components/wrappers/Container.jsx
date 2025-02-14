import  { Children } from "react";

const Container = ({ className, children }) => {
  return (
    <section
      className={` sm:container md:max-w-6xl lg:max-w-7xl  mx-auto lg:py-20 md:py-12 py-8 sm:px-6 md:px-6 lg:px-0 px-6 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
