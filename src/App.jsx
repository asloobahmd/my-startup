import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact-us";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useScrollToTop from "./hooks/scrollToTop";

const App = () => {
  useScrollToTop(); // whenever we change the page the scroll will be go to top

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
