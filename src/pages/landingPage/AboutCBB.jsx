import Container from "../../components/wrappers/Container";


export default function AboutCBB() {
  return (
    <>
    <Container className="lg:py-12">

    
      {/* <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto"> */}
          <div className="flex flex-wrap items-center justify-between ">

            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl aspect-square sm:h-[300px] object-cover  "
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl aspect-square sm:h-[300px] object-cover  "
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl aspect-square sm:h-[300px] object-cover  "
                    />
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  About the Legacy of
                </span>
                <h2 className="mb-5 text-4xl font-bold text-dark dark:text-white sm:text-5xl">
                  Col. Brown School
                </h2>
                <p className="mb-5 text-lg text-body-color dark:text-dark-6 text-justify">
                  Colonel Brown Cambridge School was established in March 1926 by Col. William Brown and Mrs. Brown for Indian boys. It is an English medium residential school, welcoming all boys regardless of caste, creed, or social status.
                </p>
                <p className="mb-8 text-lg text-body-color dark:text-dark-6 text-justify">
                  The school holds a prestigious place among educational institutions in India, being one of the top ICSE boarding schools in Dehradun. It attracts students not only from across India but also from around the world.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        {/* </div>
      </section> */}
      </Container>
    </>
  );
};

