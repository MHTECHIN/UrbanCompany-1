import React from "react";
import ServiceCard from "./HomeServices/ServiceCard";

export default function HomeServices() {
  const services = [
    {
      serviceIcon: "/applicationsrepair.webp",
      serviceName: "Application Repair & Service",
    },
    {
      serviceIcon: "/electricianpluber.webp",
      serviceName: "Electrician, Plumber & Carpenters",
    },
    {
      serviceIcon: "/batroomandkitchen.webp",
      serviceName: "Bathroom & Kitchen cleaning",
    },
    {
      serviceIcon: "/cleaningpest.webp",
      serviceName: "Cleaning",
    },
    {
      serviceIcon: "/waterpurifier.webp",
      serviceName: "Native Water Purifier",
    },
    {
      serviceIcon: "/nativesmartlocks.webp",
      serviceName: "Native Smart Lock",
    },
    {
      serviceIcon: "/nativesmartlocks.webp",
      serviceName: "Native Smart Lock",
    },
    {
      serviceIcon: "/waterproffing.webp",
      serviceName: "Painting & Water Proofing",
    },
    {
      serviceIcon: "/wallpanels.webp",
      serviceName: "Wall Pannels",
    },
  ];

  return (
    <>
      <div className=" w-full flex flex-col items-center">
        <div className=" w-10/12 flex justify-between mt-10">
          <div className="w-5/12 ">
            <h1 className="text-4xl mb-10 text-start font-semibold">
              Home Services at your doorstep
            </h1>
            <div className="w-fit p-6 flex justify-center items-center flex-col text-gray-600 border-[1px] my-10 border-solid rounded-md border-[#e3e3e3]">
              <lable className="font-medium w-full text-start text-xl">
                What are you looking for?
              </lable>
              <div className="w-full flex gap-3 flex-wrap my-5">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    serviceName={service.serviceName}
                    serviceIcon={service.serviceIcon}
                  />
                ))}
              </div>
            </div>

            <div className="h-20 w-full flex">
              <div className=" h-full w-1/2 flex items-center">
                <div className="flex gap-3">
                  <img src="/star.webp" className="h-12"></img>
                  <div className="h-full flex flex-col gap-1">
                    <label className=" text-2xl font-medium">4.8</label>
                    <lable className="text-sm text-gray-700">
                      Service Rating
                    </lable>
                  </div>
                </div>
              </div>
              <div className=" h-full w-1/2 flex items-center">
                <div className="flex gap-3">
                  <img src="/group.webp" className="h-12"></img>
                  <div className="h-full flex flex-col gap-1">
                    <label className=" text-2xl font-medium">1.2M+</label>
                    <lable className="text-sm text-gray-700">
                      Customers Globally
                    </lable>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-5/12">
            <img src="/urbancompany.webp"></img>
          </div>
        </div>
      </div>
    </>
  );
}
