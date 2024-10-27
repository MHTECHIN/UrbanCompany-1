import React from "react";

const Poster = ({ src, alt }) => {
  return (
    <>
      <div className="w-full p-10 m-auto ">
        <img
          src={src}
          alt={alt || ""}
          className="w-full hover:scale-105 hover:cursor-pointer hover:rounded-xl"
        />
      </div>
    </>
  );
};

export default Poster;
