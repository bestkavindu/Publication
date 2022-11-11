import React from "react";
import AnimatedPage from "../../components/AnimatedPage";
import Header from "./../../components/Header";

const Home = () => {
	return (
		<AnimatedPage>
			<div className="h-screen">
				<Header />
			</div>
		</AnimatedPage>
	);
};

export default Home;
