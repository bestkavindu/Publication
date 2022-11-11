import React from "react";
import AnimatedPage from "../../components/AnimatedPage";
import ContactForm from "../../components/contact/ContactForm";
import ContactGrid from "../../components/contact/ContactGrid";
import ContactHeader from "../../components/contact/ContactHeader";

const Contact = () => {
	return (
        <AnimatedPage>
		<div>
			<ContactHeader />
			<ContactGrid />
			<ContactForm />
		</div>
        </AnimatedPage>
	);
};

export default Contact;
