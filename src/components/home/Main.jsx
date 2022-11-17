import Phone from "../../assets/img/screen.png";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Test from "./Test";

const Main = () => {
	const [phoneTop, phoneSetTop] = useState(true);
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 200 ? phoneSetTop(false) : phoneSetTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [phoneTop]);

	const [bottom, setBottom] = useState(true);
	useEffect(() => {
		const scrollHandler = (e) => {
			const scrollable =
				document.documentElement.scrollHeight - window.innerHeight;
			const scrolled = window.scrollY;
			let scrolledRounded = Math.round(scrolled);

			if (scrolledRounded === scrollable ) {
				setBottom(false);
			} else {
				setBottom(true);
			}
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [bottom]);

	return (
		<div className="pb-12 mainView">
			<div className="pt-24 mx-auto max-w-7xl px-4  sm:px-6 flex flex-col justify-center items-center">
				<div className="text-center">
					<span className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
						<h2 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-wide uppercase">
							Nextgen Publications Presents
						</h2>
						<span className="block font-bold">
							The Next Generation of Reading
						</span>
						<span className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2 shine">
							DIGITAL LIBRARY
						</span>
					</span>
					<p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl px-5"></p>
				</div>
			</div>
			<div className="w-full mx-auto sticky top-24 flex justify-center items center">
				<div className="absolute">
					<img
						src={Phone}
						alt="Logo"
						className={`w-[250px] transition-width duration-500 ease-in-out ${
							!phoneTop && "w-[500px]"
						} ${!bottom && "w-[251px]"}`}
					/>
				</div>
				<div className={`absolute p-12 transition duration-500 ease-in`}>
					<div className="flex justify-center items-center w-[110px] h-[110px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] cursor-pointer gelatine mt-10">
						<div className="flex justify-center items-center flex-col bg-white w-[100%] h-[100%] rounded-full ">
							<div className="flex justify-center items-start flex-row font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
								<p className="font-poppins font-medium text-[18px] leading-[23.4px] mr-2 flex justify-between">
									<span className="">Get&nbsp;&#x27B9;</span>
								</p>
							</div>
							<div className="flex justify-center items-start flex-row font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
								<p className="font-poppins font-medium text-[18px] leading-[23.4px]">
									<span className="">Started</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center w-full pt-12"></div>
			<div className="pt-24">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<Link to="/publication">
						<div className="text-center bounce2">
							<h2
								className={`text-base font-semibold text-indigo-600 tracking-wide uppercase ${
									!phoneTop && "hidden"
								}`}
							>
								&darr;
							</h2>
							<p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"></p>
							<p className="max-w-xl mt-5 mx-auto text-xl text-gray-500"></p>
						</div>
					</Link>
				</div>
			</div>
			<div>
				<Test />
			</div>

		</div>
	);
};

export default Main;
