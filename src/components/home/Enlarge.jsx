import React, { Component } from "react";

export default class Test extends Component {
	state = {
		scrollPostion: 0,
	};

	listenToScrollEvent = () => {
		document.addEventListener("scroll", () => {
			requestAnimationFrame(() => {
				this.calculateScrollDistance();
			});
		});
	};

	calculateScrollDistance = () => {
		const scrollTop = window.pageYOffset; // how much the user has scrolled by
		console.log(scrollTop);
		const winHeight = window.innerHeight;
		const docHeight = this.getDocHeight();

		const totalDocScrollLength = docHeight - winHeight;
		const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

		this.setState({
			scrollPostion,
		});
	};

	getDocHeight = () => {
		return Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	};

	componentDidMount() {
		this.listenToScrollEvent();
	}

	render() {
		return (
			<div className="App">
				<div>
					<p style={{ fontSize: this.state.scrollPostion }} className="pb-8">
						CHECK OUT OUR LATEST 
					</p>
				</div>
			</div>
		);
	}
}
