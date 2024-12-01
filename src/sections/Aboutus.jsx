import React from "react";
import { Element } from "react-scroll";
import { icons } from "../assets/icons";
import Pic from "../assets/images/aboutuspic.jpg";

const Aboutus = () => {
  return (
    <Element name="about-us">
      <section className="py-14">
        <div className="container p-3 flex flex-col smm:flex-row items-center justify-center gap-10">
          <div className="smm:w-1/2 md:p-10">
            <img
              src={Pic}
              alt="Company desk picture"
              className="min-h-[320px]"
            />
          </div>
          <div className="smm:w-1/2 flex flex-col gap-y-10">
            <h1 className="text-center smm:text-left smm:text-2xl font-medium md:leading-[1.1] smm:max-w-[90%] md:max-w-[1240px]">
              Here at AxientLabs, we focus on impact. We’re dedicated to scaling
              your business with custom software solutions. Elevate your brand
              and unlock new possibilities in the digital world.
            </h1>
            <a
              target="_blank"
              href="https://calendly.com/asloobahmd/15-min-meeting"
              className="flex gap-x-2 items-center self-center smm:self-start justify-center w-fit bg-accent-dark md:hover:scale-[1.05] duration-300 hover:bg-accent-darker py-2.5 px-4 rounded-xl"
            >
              <p>Book a 15min call</p>
              <span>{icons.arrow}</span>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Aboutus;
