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
import Frontend from "./layouts/Frontend";
import Backend from "./layouts/BackendLayout";
import DashboardIndex from "./pages/dashboard/publications/PublicationIndex";
import CreatePublication from "./pages/dashboard/publications/CreatePublication";
import PublicationIndex from "./pages/dashboard/publications/PublicationIndex";
import EditPublication from "./pages/dashboard/publications/EditPublication";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Frontend />}>
            <Route path="/" element={<Home />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>

          <Route path="/dashboard" element={<Backend />}>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route
              path="/dashboard/view-publication"
              element={<PublicationIndex />}
            />
            <Route
              path="/dashboard/add-publication"
              element={<CreatePublication />}
            />
            <Route
              path="/dashboard/edit-publication/:id"
              element={<EditPublication />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
