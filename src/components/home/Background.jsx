import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Phone from "../../assets/img/screen.png";

import bg1 from "../../image/bg-1.jpg";
import bg2 from "../../image/bg-2.png";
import bg3 from "../../image/bg-3.png";
import bg4 from "../../image/bg-4.png";
import bg5 from "../../image/bg-5.png";

import img1 from "../../svg/coming-soon.svg";
import img2 from "../../svg/12.svg";
import img3 from "../../svg/15.svg";

import "../../index.css";
import { Link } from "react-router-dom";

export default function Background() {
	return (
		<main>
			<ParallaxProvider>
				<header>
					<ParallaxBanner
						className="banner"
						layers={[
							{
								image: bg1,
								translateY: [0, 50],
								scale: [1.05, 1, "easeOutCubic"],
								shouldAlwaysCompleteAnimation: true,
								expanded: false,
								children: (
									<div>
										{" "}
										<div className="absolute w-full inset-0 flex items-center pb-48 sm:pb-0 md:pb-48 sm:items-start pt-0 sm:pt-48 md:pt-48 lg:pt-8 justify-end md:pr-12 lg:pr-48">
											<img
												src={img3}
												alt="img3"
												className="w-[200px] h-[200px] lg:w-[250px] lg:h-[200px] sm:mt-4"
											/>
										</div>
										<div className="absolute inset-0 flex items-start justify-center pt-24">
											<h1 className="text-4xl sm:text-6xl md:text-8xl text-white font-bold opacity-80 text-gradient p-4 text-center shine sm:hidden">
												Digital Library
											</h1>
										</div>
									</div>
								),
							},
							{
								image: bg2,
								translateY: [5, 45],
								scale: [1.05, 1, "easeOutCubic"],
								shouldAlwaysCompleteAnimation: true,
								expanded: false,
							},
							{
								image: bg3,
								translateY: [10, 30],
								scale: [1.05, 1, "easeOutCubic"],
								shouldAlwaysCompleteAnimation: true,
								expanded: false,
								children: (
									<div>
										<div className="absolute inset-0 flex items-center justify-center pb-8 sm:pb-24 ">
											<h1 className="text-4xl sm:text-6xl md:text-8xl text-white font-bold opacity-80 text-gradient p-4 text-center shine hidden sm:block">
												Digital Library
											</h1>
										</div>
										<div className="absolute w-full inset-0 flex items-center justify-start pt-8 lg:pt-0">
											<img
												src={img2}
												alt="img2"
												className="w-[200px] h-[200px] lg:w-[350px] lg:h-[500px]"
											/>
										</div>
									</div>
								),
							},
							{
								image: bg4,
								translateY: [15, 25],
								scale: [1.05, 1, "easeOutCubic"],
								shouldAlwaysCompleteAnimation: true,
								expanded: false,
								children: (
									<div className="absolute inset-0 flex items-center justify-end pt-48 sm:pt-12 md:pt-12">
										<img
											src={img1}
											alt="img1"
											className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]"
										/>
									</div>
								),
							},
							{
								image: bg5,
								translateY: [20, 20],
								scale: [1.05, 1, "easeOutCubic"],
								shouldAlwaysCompleteAnimation: true,
								expanded: false,
							},
							{
								translateY: [25, 30],
								scale: [1.05, 1, "easeOutCubic"],
								children: (
									<div className="absolute inset-0 flex items-center justify-center pt-12">
										<h1 className="text-2xl md:text-4xl text-white font-bold font-poppins opacity-80 text-gradient p-2 text-center bounce2 cursor-pointer">
											<a href="#phoneView">&darr;</a>
										</h1>
									</div>
								),
							},
						]}
					/>
				</header>
			</ParallaxProvider>
		</main>
	);
}
