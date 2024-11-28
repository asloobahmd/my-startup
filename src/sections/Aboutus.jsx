import React from "react";
import { Element } from "react-scroll";
import { icons } from "../assets/icons";

const Aboutus = () => {
  return (
    <Element name="about-us">
      <section className="py-14 md:py-20">
        <div className="container p-3 flex flex-col items-center justify-center gap-y-10">
          <h1 className="text-2xl md:text-5xl text-center font-medium tracking-tight md:leading-[1.1] smm:max-w-[90%] md:max-w-[1240px]">
            Here at AxientLabs, we focus on impact. We’re dedicated to scaling
            your business with custom software solutions. Elevate your brand and
            unlock new possibilities in the digital world.
          </h1>
          <a
            target="_blank"
            href="https://calendly.com/asloobahmd/15-min-meeting"
            className="flex gap-x-2 items-center justify-center bg-accent-dark md:hover:scale-[1.05] duration-300 hover:bg-accent-darker py-2.5 px-4 rounded-xl"
          >
            <p>Book a 15min call</p>
            <span>{icons.arrow}</span>
          </a>
        </div>
      </section>
    </Element>
  );
};

export default Aboutus;
