import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { icons } from "../assets/icons";
import logo from "../assets/images/logo.png";
import { navlinks } from "../constants/index";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const { pathname } = useLocation();

  const handleLogoClick = () => {
    if (pathname === "/") {
      scroll.scrollToTop();
    }
  };

  const handleNavLinkClick = () => {
    setClicked(false);
  };

  return (
    <nav className="w-full md:p-6 fixed top-0 z-50">
      <div
        className={`mx-auto bg-brand-primary relative md:bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md md:bg-opacity-10 md:border border-gray-800 md:flex items-center justify-center gap-x-6 text-white md:rounded-xl p-3 max-md:py-5 md:w-fit md:px-6`}
      >
        <div>
          <Link to={"/"} onClick={handleLogoClick}>
            <img src={logo} alt="" className="w-44" />
          </Link>
        </div>

        <div
          className={`text-sm font-medium tracking-tight max-md:px-3 max-md:bg-brand-primary max-md:w-full left-0 top-full max-md:absolute ${
            clicked
              ? "max-md:h-[220px] max-md:border-b border-gray-800"
              : "max-md:h-0"
          } transition-[height] duration-700 ease-in-out max-md:overflow-hidden flex md:items-center max-md:flex-col gap-x-4 max-md:gap-y-4`}
        >
          <ul className="flex max-md:flex-col gap-x-1 max-md:gap-y-1.5">
            {navlinks.map((item, i) => {
              if (pathname === "/") {
                return (
                  <ScrollLink
                    to={item.to}
                    key={i}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer py-1.5 md:px-3 duration-500 rounded-md md:hover:bg-gray-800 inline-block"
                    activeClass="active-nav-element"
                    spy={true}
                    onClick={handleNavLinkClick}
                  >
                    {item.label}
                  </ScrollLink>
                );
              } else {
                return (
                  <Link
                    to={item?.label === "Contact Us" ? "/contact-us" : "/"}
                    key={i}
                    onClick={handleNavLinkClick}
                    className={`${
                      item?.label === "Contact Us" ? "md:bg-gray-800" : ""
                    } cursor-pointer py-1.5 md:px-3 duration-500 rounded-md md:hover:bg-gray-800 inline-block`}
                  >
                    {item.label}
                  </Link>
                );
              }
            })}
          </ul>

          <a
            target="_blank"
            href="https://calendly.com/asloobahmd/15-min-meeting"
            className="bg-accent-dark flex items-center gap-x-2 md:hover:scale-[1.05] duration-300 hover:bg-accent-darker py-2 px-3 rounded-lg"
          >
            Book a call
            {icons.call}
          </a>
        </div>

        <button
          onClick={() => setClicked(!clicked)}
          className={`md:hidden absolute top-[50%] -translate-y-[50%] right-4 transition-transform duration-500 ${
            clicked ? "rotate-90" : "rotate-0"
          } `}
        >
          {clicked ? icons.menuclose : icons.menu}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
