import React from "react";

export default function ServiceCard({ serviceIcon, serviceName }) {
  return (
    <div className="w-[134px] h-[96px] my-1 gap-2 flex flex-col">
      <div className="bg-[#f5f5f5] flex-grow rounded-md flex justify-center items-center">
        <img src={serviceIcon} width={50} alt={serviceName} />
      </div>
      <label className="h-[20px] text-xs text-center">{serviceName}</label>
    </div>
  );
}
