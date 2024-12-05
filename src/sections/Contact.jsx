import React from "react";
import { icons } from "../assets/icons";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import useScrollToTop from "../hooks/scrollToTop";

const Contact = () => {
  useScrollToTop();

  return (
    <Element name="contact-us">
      <section className="py-14 md:py-20 relative overflow-x-hidden">
        {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,theme(colors.brand.primary)_40%,#dfbe38_100%)]"></div> */}
        <div className="container p-3 ">
          <div className="relative overflow-hidden  border border-zinc-700 rounded-3xl py-24 px-12 max-sm:px-4">
            {/* bg brighness blob */}
            <div className="absolute z-[-5]  md:h-[400px] w-[50%] md:w-[1000px] left-[50%] -translate-x-[50%] bottom-0 md:bottom-[-150px]">
              <svg
                className="blur-[150px] opacity-40"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FADC07"
                  d="M63.2,-18.8C71.7,5.5,61.2,37.6,37.8,55.4C14.5,73.1,-21.8,76.5,-43.3,60.6C-64.9,44.7,-71.7,9.6,-62,-16.4C-52.4,-42.4,-26.2,-59.2,0.6,-59.4C27.4,-59.6,54.8,-43.2,63.2,-18.8Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <h1 className="font-medium text-4xl md:text-6xl text-center tracking-tight md:leading-[1.1] max-w-[600px] mx-auto">
              Ready to scale your business to{" "}
              <span className="font-instrumentSerif font-medium tracking-normal italic">
                new heights?{" "}
              </span>
            </h1>
            <p className=" tracking-tight text-center md:text-xl max-w-[600px] mt-7 mx-auto">
              Ready to bring your vision to life? Get in touch with us to
              discuss your project. 👇
            </p>
            <Link
              to={"/contact-us"}
              className="w-fit cursor-pointer flex gap-x-2 mx-auto items-center md:hover:scale-[1.05] mt-6 duration-300 text-accenttext bg-accent-dark hover:bg-accent-darker py-2 px-4 rounded-xl"
            >
              Contact Us
              {icons.contact}
            </Link>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
