import React from "react";
import { Element } from "react-scroll";
import { pricingDetails } from "../constants/pricing-plans";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <Element name="pricing">
      <section className="py-14 md:py-20">
        <div
          class="container p-3 sm:px-10 flex flex-col justify-center items-center text-base mx-auto"
          id="pricing"
        >
          <div className="mb-16 flex flex-col gap-y-4 text-center">
            <h3 class="text-3xl font-semibold">Plans</h3>
            <p className="max-w-3xl text-graytext">
              Choose the perfect plan for your needs. Whether you're looking for
              a simple static website, a dynamic solution with advanced
              features, or a complete e-commerce setup, we've got you covered.
              Explore our flexible pricing options to bring your vision to life!
            </p>
          </div>

          <div class="isolate mx-auto grid grid-cols-1 gap-8 md:gap-x-12 smm:grid-cols-2 md:grid-cols-3">
            {pricingDetails?.plans.map((plan, i) => (
              <PricingCard key={i} plan={plan} />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Pricing;
