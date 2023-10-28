import { useState } from "react";
import { twMerge } from "tailwind-merge";
import CircleIcon from "./CircleIcon";
import crossIcon from "../asset/icon/icon-cross.svg";

export default function TodoItem({ first, completed, dark }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
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
            "flex justify-between items-center p-3 border-b border-lVDGrayishBlue bg-lVLGrayishBlue",
            dark && "bg-dVLGrayishBlue", first && "rounded-t-lg")}
        >
          <div className="flex items-center text-start">
            <div>
              <CircleIcon isHovered={isHovered} completed={false} dark={dark} />
            </div>
            <div className="mx-3 text-lVLGray text-reguler">
              satu dua tifa empat lima enam enam enam
            </div>
          </div>
          <img src={crossIcon} className={twMerge("h-5 w-5 block", isHovered ? 'sm:block' : 'sm:hidden')} alt="remove item" />
        </div>
      </button>
    </>
  );
}
