import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactHeader from './components/ContactHeader';
import ContactForm from './components/ContactForm';
import ContactGrid from './components/ContactGrid';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publication" element={<Publication />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
