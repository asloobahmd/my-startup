import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="container p-3 flex flex-col gap-y-10 md:gap-y-14">
        {/* box 1 */}
        <div className="flex flex-col items-center gap-y-6">
          <h2 className="text-2xl md:text-6xl">How can we help you?</h2>
          <p className="max-w-[580px] text-center text-graytext md:text-xl">
            From Google ads, to Meta ads, to TikTok ads, and even content
            creation, we've got you covered on everything front.
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
  );
};

export default Services;
