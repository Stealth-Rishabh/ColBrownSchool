import React, { useState } from "react";

const testimonialList = [
	[
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
			name: "Aarav Sharma",
			position: "Graduate, Class of 2022",
			content:
				"My experience at this Indian school was transformative. The support from the faculty and the resources available helped me excel in my studies and prepare for my career.",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
			name: "Ananya Gupta",
			position: "Alumna, Class of 2021",
			content:
				"The school provided me with the skills and confidence I needed to succeed in my field. I am grateful for the opportunities I had during my time there, especially the cultural events.",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
			name: "Rohan Verma",
			position: "Former Student, Class of 2020",
			content:
				"The connections I made and the knowledge I gained at this Indian school have been invaluable in my professional journey. I highly recommend it to future students.",
		},
	],
	[
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_4.jpeg",
			name: "Priya Desai",
			position: "Graduate, Class of 2023",
			content:
				"The curriculum was challenging yet rewarding, and I felt well-prepared for my career after graduation. The emphasis on practical learning was particularly beneficial.",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_5.jpeg",
			name: "Vikram Singh",
			position: "Alumnus, Class of 2020",
			content:
				"The mentorship I received from the faculty was exceptional, guiding me through my academic and professional journey. The school's focus on holistic development is commendable.",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_6.jpeg",
			name: "Sneha Iyer",
			position: "Former Student, Class of 2019",
			content:
				"I made lifelong friends and gained invaluable experiences that shaped my personal and professional life. The diverse student body enriched my learning experience.",
		},
	],
];

function ShapeOne() {
	return (
		<svg
			className="absolute bottom-5 left-0 -z-[1]"
			width="404"
			height="572"
			viewBox="0 0 404 572"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="118"
				cy="286"
				r="265.5"
				stroke="#3B823A"
				strokeOpacity="0.2"
				strokeWidth="41"
			/>
		</svg>
	);
}

function ShapeTwo() {
	return (
		<svg
			className="absolute top-5 right-0 -z-[1]"
			width="269"
			height="479"
			viewBox="0 0 269 479"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="239.5"
				cy="239.5"
				r="239.5"
				fill="#B91C1C"
				fillOpacity="0.2"
			/>
		</svg>
	);
}

const Testimonials = () => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => setIndex(selectedIndex);

	return (
		<section className="ezy__testimonial23 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
			<ShapeOne />
			<ShapeTwo />

			<div className="sm:container md:max-w-6xl lg:max-w-7xl  px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6 items-start justify-between mb-6 md:mb-12">
					<div className="col-span-12 md:col-span-6 lg:col-span-4">
						<h2 className="sm:text-4xl text-3xl text-center sm:text-left font-bold leading-normal">
							What Our Students Say
						</h2>
					</div>
					<div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
						<p className="text-lg leading-[1.7] opacity-80 text-center sm:text-left">
							Our students have shared their experiences, emphasizing the importance of both paid and unpaid roles in shaping their careers.
						</p>
					</div>
				</div>

				<div className="mt-12">
					<div className="grid grid-cols-3 gap-6">
						{testimonialList[index].map((testimonial, i) => (
							<div className="col-span-3 lg:col-span-1" key={i}>
								<div className="bg-white dark:bg-[#0b1727] shadow-2xl h-full p-6 xl:p-10">
									<div className="flex items-center mb-6">
										<div className="mr-3">
											<img
												src={testimonial.img}
												alt={testimonial.name}
												className="max-w-full h-auto rounded-full border"
												width="65"
											/>
										</div>
										<div>
											<h4 className="text-xl font-medium">
												{testimonial.name}
											</h4>
											<p className="text-sm mb-2">{testimonial.position}</p>
										</div>
									</div>
									<p className="opacity-75 mb-2">{testimonial.content}</p>
								</div>
							</div>
						))}
					</div>

					<div className="flex justify-center gap-2 m-0 mt-12">
						{testimonialList.map((item, i) => (
							<button
								className={`w-2 h-2 rounded-full ${
									index === i
										? "scale-125 bg-blue-600"
										: " bg-gray-400 dark:bg-slate-800"
								} `}
								key={i}
								onClick={() => handleSelect(i)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Testimonials;
