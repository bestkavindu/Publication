import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Publication from "./pages/publication/Publication";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {showNav && <Navbar />}
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/publication" element={<Publication />} />
          <Route
            path="/dashboard"
            element={<Dashboard funcNav={setShowNav} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </div>
  );
};

export default App;
