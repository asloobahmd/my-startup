import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DefaultLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default DefaultLayout;
