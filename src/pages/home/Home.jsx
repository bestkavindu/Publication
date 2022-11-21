import React from "react";
import AnimatedPageTwo from "../../components/AnimatedPageTwo";
import Main from "./../../components/home/Main";
import Background from './../../components/home/Background';
import Text  from './../../components/home/Text';
import MainRep from './../../components/home/MainRep';
import Shapes from './../../components/home/Shapes';

const Home = () => {
	return (
		<div className="bg-white">
			<AnimatedPageTwo>
				<Background />
				<div className=" md:hidden ">
					<Text />
				</div>
				<Main />
			</AnimatedPageTwo>
		</div>
	);
};

export default Home;
