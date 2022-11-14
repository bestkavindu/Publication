import React from "react";
import AnimatedPage from "../../components/AnimatedPage";
import Main from './../../components/home/Main';

const Home = () => {
	return (
		<AnimatedPage>
			<div className="main-bg h-full">
				<Main />
			</div>
		</AnimatedPage>
	);
};

export default Home;
