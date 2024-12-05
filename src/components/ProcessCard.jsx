import React from "react";

const ProcessCard = ({ item }) => {
  return (
    <div className="flex items-stretch border-b-2 border-gray-600 min-h-[240px] md:max-w-[620px]">
      {/* Number Section */}
      <div className="text-5xl font-bold text-graytext px-6 border-r border-gray-600 flex items-center">
        {item.number}
      </div>

      {/* Text Content */}
      <div className="flex-1 p-6 flex flex-col  justify-center relative">
        <h2 className="text-xl font-semibold flex items-center">
          {item.title}
        </h2>
        <span className="hidden sm:block ml-2 text-lg text-accent-dark absolute sm:right-0 smm:right-[30px] sm:top-[20px] smm:top-[30px] md:top-[20px]">
          {item?.icon}
        </span>
        <p className="text-graytext text-base leading-relaxed mt-2">
          {item.text}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;
