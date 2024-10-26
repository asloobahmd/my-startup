import React, { useState } from "react";
import { navlinks } from "../constants/index";
import { icons } from "../assets/icons";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="w-full md:p-6 fixed top-0 z-50">
      <div
        className={`bg-brand-primary relative md:bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md md:bg-opacity-10 md:border border-gray-800 mx-auto md:flex items-center justify-center gap-x-6 text-white md:rounded-xl p-3 max-md:py-5 md:w-fit md:px-6`}
      >
        <div>
          <Link to="/">
            <img src={logo} alt="" className="h-12 w-12" />
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
            {navlinks.map((item, i) => (
              <li key={i}>
                <a
                  className="py-1.5 md:px-3 duration-500 rounded-md md:hover:bg-gray-800 inline-block"
                  href={item.link}
                >
                  {item.label}
                </a>
              </li>
            ))}
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
