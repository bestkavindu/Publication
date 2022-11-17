import React from "react";
import AnimatedPageTwo from "../../components/AnimatedPageTwo";
import Main from "./../../components/home/Main";

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
