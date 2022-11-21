import React, { useState } from "react";
import { Route, Routes, useLocation, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Frontend = () => {
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();
  return (
    <div>
      {/* {showNav && <Navbar />} */}
      <Navbar />

      <Outlet />
      {/* <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/publication" element={<Publication />} />
          <Route
            path="/dashboard"
            element={<Dashboard funcNav={setShowNav} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
      <Footer />
    </div>
  );
};

export default Frontend;
