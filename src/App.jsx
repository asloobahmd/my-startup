import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact-us";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
