import React from "react";
import { useParallax } from "react-scroll-parallax";
import bubble from "../../image/pngwing.com.png";

const Spaceworms = () => {
	const rotate = useParallax({
		rotate: [0, 360],
	});
	return (
		<div className="rotate">
			<div ref={rotate.ref}>
				<img
					src={bubble}
					alt="bubble"
					className="w-[50px] h-[50px] "
				/>
			</div>
		</div>
	);
};

export default Spaceworms;
