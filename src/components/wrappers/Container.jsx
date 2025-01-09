import React, { Children } from "react";

const Container = ({ className, children }) => {
  return (
    <section
      className={`container mx-auto lg:py-20 md:py-12 py-8 sm:px-0 px-6 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
