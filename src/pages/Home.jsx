import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import useDarkModeStore from "../store/darkModeStore";
import BackgroundCover from "../components/BackgroundCover";
import Footer from "../components/Footer";
import TodoContainer from "../components/TodoContainer";

export default function Home() {
  const { darkMode } = useDarkModeStore();

  let todoData = JSON.parse(localStorage.getItem("todoData"));
  if(!todoData){
    todoData = [];
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }

  return (
    <>
        <div className={twMerge("font-default relative min-h-screen flex flex-col bg-lVLGray", darkMode && "bg-dVLGray")}>
            <BackgroundCover dark={darkMode}/>
            <div className="flex-grow">
              <TodoContainer dark={darkMode}/>
            </div>
            <div className="mt-auto">
              <Footer dark={darkMode}/>
            </div>
        </div>
    </>
  );
}