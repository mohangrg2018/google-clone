"use client";

import { useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log("Error fetching data", error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="text-3xl">Something went wrong</h1>
      <button onClick={() => reset()} className="text-blue-500">
        Try Again
      </button>
    </div>
  );
};

export default error;
