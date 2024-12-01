import React from "react";

const PricingCard = ({ plan }) => {
  return (
    <div
      class={`ring-1 shadow-md max-smm:max-w-[320px] smm:max-w-[320px] ${
        plan?.name === "Standard"
          ? "scale-[1.05] ring-accent-dark"
          : " ring-gray-800"
      }  rounded-3xl p-8 xl:p-10 `}
    >
      <div class="flex items-center justify-between gap-x-4">
        <h3 id="tier-standard" class="text-2xl font-semibold leading-8">
          {plan.name}
        </h3>
      </div>
      {/* <p class="mt-4 text-base leading-6 text-gray-600">
        1 license for only 1 activation
      </p> */}
      <p class="mt-4 flex items-baseline gap-x-1 font-bold tracking-tight text-gray-400">
        {plan?.price && (
          <>
            <span className="text-3xl mr-1">$</span>
            <span className="text-4xl">{plan.price}</span>
          </>
        )}
        {plan?.priceText && (
          <span className="text-3xl mt-1 inline-block">{plan.priceText}</span>
        )}
      </p>
      {/* <a
        href=""
        aria-describedby="tier-standard"
        class="text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        target="_blank"
      >
        Buy now
      </a> */}
      <ul
        role="list"
        class="mt-8 space-y-3 text-sm leading-6 text-gray-400 xl:mt-10"
      >
        {plan?.features.map((feature, i) => (
          <li key={i} className="flex gap-x-3 text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="h-6 w-5 flex-none text-blue-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
