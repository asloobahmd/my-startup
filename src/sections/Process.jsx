import React from "react";
import { Element } from "react-scroll";
import ProcessCard from "../components/ProcessCard";
import { process } from "../constants/Process-steps";
import { icons } from "../assets/icons";

const Process = () => {
  return (
    <Element name="Process">
      <section className="py-14">
        <div className="container p-3 flex flex-col md:flex-row max-md:items-center justify-center gap-x-8 gap-y-10">
          {/* left section */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-y-7 bg-[#0D0D0D] shadow-sm border border-zinc-800 px-6 py-10 rounded-lg max-w-[550px] sticky top-28">
              <div>
                <p className="text-accent-dark font-medium">
                  Our Seamless Process
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold mt-4">
                  Here's How it works
                </h1>
              </div>
              <p className="text-lg">
                Simple 3-step process. It's really that easy.
              </p>
              <a
                target="_blank"
                href="https://calendly.com/asloobahmd/15-min-meeting"
                className="flex gap-x-2 items-center self-start justify-center w-fit text-accenttext bg-accent-dark hover:bg-accent-darker md:hover:scale-[1.05] duration-300 py-2 px-4 rounded-xl"
              >
                <p>Book a 15min call</p>
                <span>{icons?.arrow}</span>
              </a>
            </div>
          </div>

          {/* right section */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-center justify-center">
              {process.map((item, i) => (
                <ProcessCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Process;
