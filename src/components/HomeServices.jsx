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
      <div className="flex flex-col items-center">
        <div className="w-[1232px] max-xl:w-[1010px] max-lg:w-full max-lg:px-4 max-lg:mx-auto mt-10">
          <div className="flex justify-between">
            <div className="w-[514px] max-xl:w-[480px] max-lg:w-[514px] max-lg:mx-auto">
              <h1 className="mb-10 text-4xl font-semibold text-start">
                Home Services at your doorstep
              </h1>
              <div className="w-fit p-6 flex justify-center items-center flex-col text-gray-600 border-[1px] my-10 border-solid rounded-md border-[#e3e3e3]">
                <label className="w-full text-xl font-medium text-start">
                  What are you looking for?
                </label>
                <div className="flex flex-wrap items-center justify-center w-full gap-3 my-5">
                  {services.map((service, index) => (
                    <ServiceCard
                      key={index}
                      serviceName={service.serviceName}
                      serviceIcon={service.serviceIcon}
                    />
                  ))}
                </div>
              </div>

              <div className="flex w-full h-20">
                <div className="flex items-center w-1/2 h-full">
                  <div className="flex gap-3">
                    <img src="/star.webp" className="h-12"></img>
                    <div className="flex flex-col h-full gap-1">
                      <label className="text-2xl font-medium ">4.8</label>
                      <label className="text-sm text-gray-700">
                        Service Rating
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-1/2 h-full">
                  <div className="flex gap-3">
                    <img src="/group.webp" className="h-12"></img>
                    <div className="flex flex-col h-full gap-1">
                      <label className="text-2xl font-medium ">1.2M+</label>
                      <label className="text-sm text-gray-700">
                        Customers Globally
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[616px] max-xl:w-[500px] max-xl:mt-16 max-lg:hidden">
              <img src="/urbancompany.webp"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
