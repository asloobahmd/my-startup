import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="group min-h-[250px] max-w-[500px] bg-[#0D0D0D] shadow-sm border border-zinc-800 hover:bg-accent-dark rounded-lg p-6">
      <div className="group-hover:-translate-y-3 transition-all duration-300 flex flex-col mt-4">
        <div className="text-accent-dark group-hover:text-accenttext">
          {service.icon}
        </div>
        <div className="flex flex-col gap-y-3 mt-5">
          <h2 className="text-xl font-semibold group-hover:text-accenttext">
            {service.title}
          </h2>
          <p className="text-graytext group-hover:text-accenttext">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
