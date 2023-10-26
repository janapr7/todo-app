import React, { useState, useEffect } from "react";
import checkIcon from "../asset/icon/icon-check.svg"

export default function Example() {

  return (
    <div className="bg-red-600 font-default text-lVLDGrayishBlue text-base">
      <h1>Weather App</h1>
      <img src={checkIcon} alt="tes" />
    </div>
  );
}