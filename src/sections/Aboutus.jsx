import React from "react";
import { Element } from "react-scroll";
import { icons } from "../assets/icons";
import Pic from "../assets/images/aboutuspic.webp";

const Aboutus = () => {
  return (
    <Element name="about-us">
      <section className="py-14">
        <div className="container p-3 flex flex-col smm:flex-row items-center justify-center gap-10">
          <div className="smm:w-1/2 md:p-10">
            <img
              src={Pic}
              alt="Company desk picture"
              className="min-h-[320px] rounded-[20px]"
            />
          </div>
          <div className="smm:w-1/2 flex flex-col gap-y-4">
            <h1 className="text-3xl font-semibold max-smm:text-center">
              About us
            </h1>
            <h1 className="text-center smm:text-left text-graytext smm:max-w-[90%] md:max-w-[1240px]">
              Here at AxientLabs, we focus on impact. We’re dedicated to scaling
              your business with websites & custom software solutions that drive
              results. Our team blends expertise in innovation, design, and
              technology to create transformative experiences that help your
              brand stand out in a competitive digital landscape. <br /> <br />
              We don’t just build software—we build powerful partnerships. From
              the initial concept to full-scale deployment, we work alongside
              you to ensure that every solution aligns with your vision and
              growth goals. Together, we’ll unlock new opportunities and push
              the boundaries of what’s possible in the digital world. <br />
              <br />
              Your success is our mission. Let’s create something extraordinary
              that drives lasting value for your business.
            </h1>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Aboutus;
