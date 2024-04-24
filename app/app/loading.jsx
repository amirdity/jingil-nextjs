"use client";
import React from "react";
import { CirclesWithBar } from "react-loader-spinner";
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <CirclesWithBar
        height="200"
        width="200"
        color="#f59931"
        outerCircleColor="#f59931"
        innerCircleColor="#f59931"
        barColor="#f59931"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
