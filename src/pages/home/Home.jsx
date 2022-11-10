import React from "react";
import ContactForm from "../../components/contact/ContactForm";
import ContactGrid from "../../components/contact/ContactGrid";
import ContactHeader from "../../components/contact/ContactHeader";

const Home = () => {
	return (
		<div className="h-screen">
			<ContactHeader />
			<ContactGrid />
			<ContactForm />
		</div>
	);
};

export default Home;
