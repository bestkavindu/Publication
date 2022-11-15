import React from "react";
import Screen from "../../assets/img/screen.png";
import ac from "../../assets/ac.jpg";

const Phone = () => {
	return (
		<div className="sticky top-24 w-full h-full">
			<div className="relative w-full h-full">
                <div className="absolute">
				    <img src={Screen} alt="Logo" className="mx-auto"/>
                </div>
				<div className="absolute">
					<img src={ac} alt="Content" width="100px" className="mx-auto"/>
				</div>
			</div>
		</div>
	);
};

export default Phone;
