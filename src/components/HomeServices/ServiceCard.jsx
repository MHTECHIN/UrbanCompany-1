import React from "react";

export default function ServiceCard({ serviceIcon, serviceName }) {
  return (
    <div className="w-[134px] h-[96px] max-[506px]:w-[98px] max-[506px]:h-[85px] my-2 gap-2 flex flex-col">
      <div className="bg-[#f5f5f5] flex-grow rounded-md flex justify-center items-center">
        <img src={serviceIcon} width={50} alt={serviceName} />
      </div>
      <label className="h-[20px] max-[506px]:h-3 text-xs max-[506px]:text-[10px] text-center">
        {serviceName}
      </label>
    </div>
  );
}
