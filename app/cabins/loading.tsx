import React from "react";
import Spinner from "@/app/_components/Spinner";

function loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className=" text-xl text-primary-200">Loading cabins data...</p>
    </div>
  );
}

export default loading;
