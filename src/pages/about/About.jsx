import React from "react";
import AnimatedPage from "./../../components/AnimatedPage";
import AboutHeader from "./../../components/about/AboutHeader";
import Sample from "../../components/about/CTA";

const About = () => {
	return (
		<AnimatedPage>
			<div>
				<AboutHeader />
				<Sample />
			</div>
		</AnimatedPage>
	);
};

export default About;
