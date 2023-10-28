import React, { useState, useEffect } from "react";
import checkIcon from "../asset/icon/icon-check.svg"

export default function Example() {

  return (
    <div style={{ background: 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' }} className="font-default text-lVLDGrayishBlue text-base">
      <h1>Weather App</h1>
      <img src={checkIcon} alt="tes" />
    </div>
  );
}