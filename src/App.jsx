import React from "react";
import { Route, Routes } from "react-router-dom";
import useScrollToTop from "./hooks/scrollToTop";
import DefaultLayout from "./layouts/DefaultLayout";
import Contact from "./pages/Contact-us";
import { Home } from "./pages/Home";
import PrivacyPolicy from "./pages/Privacy-policy";

const App = () => {
  useScrollToTop(); // whenever we change the page the scroll will be go to top

  return (
    <div>
      <Routes>
        {/* default layout */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>

        {/* Custom Layout */}
      </Routes>
    </div>
  );
};

export default App;
