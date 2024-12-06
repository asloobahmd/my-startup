import React from "react";
import CustomerGroup from "../components/CustomerGroup";
import RatingStar from "../components/RatingStar";
import { icons } from "../assets/icons";

const Hero = () => {
  return (
    <section className="pb-14 md:pb-20 pt-36 smm:pt-40 md:pt-48">
      {/* blurred bg snippet - from this site -> bg.ibelick.com*/}
      <div className="absolute inset-0 -z-10 h-full w-full bg-brand-primary bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-20 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent-dark opacity-30 blur-[100px]"></div>
      </div>
      {/* ------------- */}
      <div className="container p-3 flex flex-col gap-y-2 items-center">
        <div className="h-[50px] flex gap-x-2 items-center justify-center">
          <CustomerGroup />
          <div>
            <RatingStar />
            <p className="tracking-tight text-sm text-graytext">
              3+ businesses scaled
            </p>
          </div>
        </div>
        {/* box */}
        <div className=" max-w-[760px] flex flex-col gap-y-6">
          <h1 className="text-4xl md:text-[70px] text-center tracking-tight leading-[1.15] font-semibold">
            Ready to{" "}
            <span className="font-instrumentSerif font-normal tracking-normal italic">
              scale
            </span>{" "}
            your business with Websites?
          </h1>
          <p className="md:text-xl text-center text-graytext">
            At AxientLabs, we blend innovation, creativity, and technology to
            build custom software that grows with your business. Don't miss the
            opportunity to elevate your business — Book a call now and let's
            accelerate your growth together! 🚀
          </p>
        </div>
        <div className="flex justify-center gap-x-6 mt-6">
          <a
            target="_blank"
            href="https://calendly.com/asloobahmd/15-min-meeting"
            className="flex items-center gap-x-2 md:hover:scale-[1.05] duration-300 text-accenttext bg-accent-dark hover:bg-accent-darker py-2 px-3 rounded-lg"
          >
            Book Now
            {icons.call}
          </a>
          {/* <button className="bg-gray-800 md:hover:scale-[1.05] duration-300 py-2.5 px-4 rounded-xl">
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
