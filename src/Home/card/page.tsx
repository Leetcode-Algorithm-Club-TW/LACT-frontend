"use client";

import { useState } from "react";
import "./index.css";
import ListPage from "../list/page";

export default function CardPage() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const handleMouseEnter = () => {
    if (!isLocked) {
      setIsMouseOver(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isLocked) {
      setIsMouseOver(false);
    }
  };

  const handleClick = () => {
    setIsLocked(!isLocked);
    setIsMouseOver(isMouseOver); // 按下時強制設定為 true 並鎖定
  };

  return (
    <div className="card-css absolute inset-0 w-full h-full flex justify-center items-center">
      <div
        className="w-[400px] h-[200px] bg-gray-200  border-t-2  border-r border-l border-t-gray-400 border-gray-300 card-shadow"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="w-full h-full ">
          {/* <div className="w-full card-bevel">123</div> */}
          <div
            className={isMouseOver ? " w-full slideDown " : "w-full slideUp"}
          >
            111
          </div>
        </div>
        {isLocked ? (
          //   <div className="h-[200px] mt-10 flex flex-col justify-between">
          <div className="h-[200px] flex flex-col justify-between slideListDown">
            <ListPage />
            <div className="w-full bg-linear-to-r from-gray-200 to-gray-400">
              123
            </div>
          </div>
        ) : (
          <div className="h-[200px] flex flex-col justify-between slideListUp">
            <ListPage />
            <div className="w-full bg-linear-to-r from-gray-200 to-gray-400">
              123
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
