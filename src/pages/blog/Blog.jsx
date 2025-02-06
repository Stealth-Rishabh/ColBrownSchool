import React from "react";
import Heading from "../../components/Heading";


const Blog = () => {
  const blogPosts = [
    {
      image: "https://pagedone.io/asset/uploads/1696244553.png",
      title: "Fintech 101: Exploring the Basics of Electronic Payments",
      author: "Harsh C.",
    },
    {
      image: "https://pagedone.io/asset/uploads/1696244579.png",
      title:
        "From Classroom to Cyberspace: The Growing Influence of EdTech in Fintech",
      author: "John D.",
    },
    {
      image: "https://pagedone.io/asset/uploads/1696244619.png",
      title:
        "Fintech Solutions for Student Loans: Easing the Burden of Education Debt",
      author: "Alexa H.",
    },
  ];

  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          title="Our Popular Blog"
          titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
          subtitle="Stay updated with our latest insights and articles"
          subtitleClassName="text-gray-700"
          className="mx-auto"
        />
        <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:justify-between lg:gap-x-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600"
            >
              <div className="flex items-center mb-6">
                <img
                  src={post.image}
                  alt={`${post.author} image`}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">By {post.author}</h6>
                  <span className="text-sm text-indigo-600">2 year ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <a
          href="javascript:;"
          className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
        >
          View All
        </a> */}
      </div>
    </section>
  );
};

export default Blog;
