import { useState } from "react";
import { twMerge } from "tailwind-merge";
import useTodoStore from "../store/todoStore";
import CircleIcon from "./CircleIcon";
import crossIcon from "../asset/icon/icon-cross.svg";

export default function TodoItem({ text, completed, timestamp, index, dark }) {
  const [isHovered, setIsHovered] = useState(false);
  const { changeTodoStatus, removeTodo } = useTodoStore();

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ text, completed, timestamp })
    );
    e.dataTransfer.setData("index", index);
  };

  return (
    <>
      <button
        type="button"
        className="w-full"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div
          className={twMerge(
            "flex justify-between items-center p-3 border-b border-lLGrayishBlue",
            dark && "border-lVDGrayishBlue"
          )}
          draggable={true}
          onDragStart={handleDragStart}
          data-index={index}
        >
          <div className="flex items-center text-start">
            <button
              type="button"
              onClick={() => {
                changeTodoStatus(timestamp);
              }}
            >
              <CircleIcon
                isHovered={isHovered}
                completed={completed}
                dark={dark}
              />
            </button>
            <div
              className={twMerge(
                "mx-3 text-dVLGray text-lg",
                dark && "text-lVLGray",
                completed && "text-lDGrayishBlue line-through"
              )}
              onClick={() => {
                changeTodoStatus(timestamp);
              }}
            >
              {text}
            </div>
          </div>
          <img
            src={crossIcon}
            className={twMerge(
              "h-5 w-5 block",
              isHovered ? "sm:block" : "sm:hidden"
            )}
            alt="remove item"
            onClick={() => {
              removeTodo(timestamp);
            }}
          />
        </div>
      </button>
    </>
  );
}
