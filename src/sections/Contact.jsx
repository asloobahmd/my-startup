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
        {/* <div class="absolute top-0 z-[-1] h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" /> */}
        <div className="absolute bottom-0 left-0 right-0 top-0 w-[200px] mx-auto  md:w-[1600px] h-[300px] translate-y-[43%] md:translate-x-[-10%] opacity-40 blur-3xl rounded-full bg-[radial-gradient(circle_500px_at_50%_200px,#FF4533,transparent)]"></div>
        <div className="container p-3">
          <div className="bg-[#0D0D0D] border border-zinc-800 rounded-3xl backdrop-blur-[10px] bg-opacity-80 max-md:w-[88%] max-w-[1000px] mx-auto py-12 px-12">
            <h1 className="text-4xl md:text-6xl text-center tracking-tight md:leading-[1.1] max-w-[600px] mx-auto">
              Ready to scale your business to{" "}
              <span className="font-instrumentSerif font-normal tracking-normal italic">
                new heights?{" "}
              </span>
            </h1>
            <p className="text-graytext tracking-tight text-center md:text-xl max-w-[600px] mt-7 mx-auto">
              Ready to bring your vision to life? Get in touch with us to
              discuss your project. 👇
            </p>
            <Link
              to={"/contact-us"}
              className="bg-accent-dark w-fit cursor-pointer flex gap-x-2 mx-auto items-center md:hover:scale-[1.05] mt-6 duration-300 hover:bg-accent-darker py-2.5 px-4 rounded-xl"
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
