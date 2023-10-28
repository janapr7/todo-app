import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import BackgroundCover from "../components/BackgroundCover";
import TodoContainer from "../components/TodoContainer";
import Footer from "../components/Footer";

export default function Home() {
    const dark = true

  return (
    <>
        <div className={twMerge("font-default relative min-h-screen flex flex-col bg-lVLGray", dark && "bg-dVLGray")}>
            <BackgroundCover dark={dark}/>
            <div className="flex-grow">
              <TodoContainer dark={dark}/>
            </div>
            <div className="mt-auto">
              <Footer dark={dark}/>
            </div>
        </div>
    </>
  );
}