import React from "react";
import AnimatedPage from "./../../components/AnimatedPage";
import AboutHeader from "./../../components/about/AboutHeader";
import CTA from "../../components/about/CTA";
import Stats from "../../components/about/Stats";
import AboutHero from './../../components/about/AboutHero';
import LogoCloud from "../../components/about/LogoClouds";

const About = () => {
	return (
		<AnimatedPage>
			<div className="">
				<AboutHeader />
				<CTA />
				<Stats />
				<AboutHero />
				<LogoCloud />
			</div>
		</AnimatedPage>
	);
};

export default About;
