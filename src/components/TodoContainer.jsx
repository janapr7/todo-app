
import { useState } from "react";

import sunIcon from "../asset/icon/icon-sun.svg"
import moonIcon from "../asset/icon/icon-moon.svg"
import { twMerge } from "tailwind-merge";
import TodoItem from "./TodoItem";

export default function TodoContainer ({dark}) {
    return (
        <>
            <div className="text-reguler justify-center mx-auto py-2 sm:py-20 max-w-xs sm:max-w-lg relative z-10">
                <div className="flex items-center justify-between">
                    <h1 className="text-lVLGray font-bold text-2xl sm:text-4xl tracking-[.5em]">TODO</h1>
                    <img src={dark ? sunIcon : moonIcon} className="h-8 w-8" alt="set mode" />
                </div>
                <TodoItem first={true} completed={false} dark={dark}/>
                <div className={twMerge("text-lDGrayishBlue flex justify-between items-center p-3 rounded-b-lg bg-lVLGrayishBlue", dark && "bg-dVLGrayishBlue")}>
                    <div className="">
                        0 items left
                    </div>
                    <div className="flex items-center text-center hidden sm:block">
                        <button type="button" className="mx-1.5">
                            All
                        </button>
                        <button type="button" className="mx-1.5">
                            Active
                        </button>
                        <button type="button" className="mx-1.5">
                            Completed
                        </button>
                    </div>
                    <button type="button" className="">
                        Clear Completed
                    </button>
                </div>
            </div>
        </>
    );
}