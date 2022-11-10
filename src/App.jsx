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
import Publication from "./pages/publication/Publication";
import Home from "./pages/home/Home";

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
