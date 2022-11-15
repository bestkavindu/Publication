import React from "react";
import AnimatedPageTwo from "../../components/AnimatedPageTwo";
import Phone from "../../components/home/Phone";
import Main from "./../../components/home/Main";
import Blog from './../../components/home/Blog';

const Home = () => {
	return (
		<div className="main-bg">
			<AnimatedPageTwo>
				<Main />
			</AnimatedPageTwo>
		</div>
	);
};

export default Home;
