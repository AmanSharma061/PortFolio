import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="flex flex-col w-fit" id="notFound"></div>
      <Link
        to="/"
        className="bg-red-500 w-fit flex gap-2 items-center px-4 py-2 rounded-xl     right-[12%] bottom-16 fixed box-border"
      >
        <i className=" box-border fa fa-arrow-left "></i>
        <Link to="/" className="font-bold text-xl font-mono  ">
          Home
        </Link>
      </Link>
    </>
  );
}

export default Error;
