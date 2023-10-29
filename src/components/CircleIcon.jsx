import React, { useState } from "react";
import checkIcon from "../asset/icon/icon-check.svg";

export default function CircleIcon({ isHovered, completed, dark }) {
  const outerStyles = {
    background:
      completed || isHovered
        ? "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
        : "hsl(236, 9%, 61%)",
    transition: "background-color 0.3s",
    position: "relative",
  };

  const innerStyles = {
    display: completed ? "none" : "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: dark ? "hsl(235, 24%, 19%)" : "hsl(236, 33%, 92%)",
    width: "90%",
    height: "90%",
    borderRadius: "50%",
  };

  return (
    <div
      className="w-5 h-5 rounded-full flex items-center justify-center"
      style={outerStyles}
    >
      {completed ? (
        <img src={checkIcon} alt="Check Icon" />
      ) : (
        <div style={innerStyles}></div>
      )}
    </div>
  );
}
