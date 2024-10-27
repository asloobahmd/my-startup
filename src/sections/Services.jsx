import React from "react";
import { Element } from "react-scroll";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <Element name="services">
      <section className="py-14 md:py-20">
        <div className="container p-3 flex flex-col gap-y-10 md:gap-y-14">
          {/* box 1 */}
          <div className="flex flex-col items-center gap-y-6">
            <h2 className="text-2xl md:text-6xl">How can we help you?</h2>
            <p className="max-w-[880px] text-center text-graytext md:text-xl">
              At iCodeLabs, we provide a full suite of services to elevate your
              business. From web and mobile app development to reliable web
              hosting solutions, we create seamless digital experiences. Our
              focus on business strategy and exceptional UI/UX design ensures
              your brand exceeds expectations.
            </p>
          </div>

          {/* box 2 */}
          <div className="grid place-content-center gap-x-6 gap-y-10 smm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Services;
