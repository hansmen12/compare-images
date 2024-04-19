import React from "react";

interface Info {
  id: number;
  title: number;
  label: string;
  description: string;
}
const CardsInfo: React.FC<{ info: Info, textColor: string }> = ({ info, textColor }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className={`text-2xl md:text-[38px] lg:text-[52px] xl:text-[62px] font-bold md:leading-[42px] lg:leading-[75px] ${textColor}`}>
        {info.title}
        <span className={`text-sm md:text-lg lg:text-xl xl:text-2xl font-medium ${textColor}`}>
          {info.label}
        </span>
      </h3>
      <p className={`text-[8px] md:text-[10px] lg:text-[14px] xl:text-[16px] uppercase ${textColor}`}>
        {info.description}
      </p>
    </div>
  );
};

export default CardsInfo;
