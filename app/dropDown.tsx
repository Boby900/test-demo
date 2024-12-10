"use client";
import { BellDot } from "lucide-react";
import { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("black");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const changeBackgroundColor = () => {
    setBgColor("gray");
  };

  return (
    <div className="">
      <button onClick={toggleDropdown} className="">
        <BellDot />
      </button>

      {isOpen && (
        <div className="flex flex-col gap-4 bg-gray-600 p-2 m-2">
          <div>
            <p>
              <button onClick={changeBackgroundColor}>Mark all as read</button>
            </p>
          </div>
          <div style={{backgroundColor:bgColor}}>
            <div className="p-2 gap-4">type 1</div>
            <div className="p-2 gap-4">type 2</div>
            <div className="p-2 gap-4">type 3</div>
            <div className="p-2 gap-4">type 4</div>
            <div className="p-2 gap-4">type 5</div>
            <div className="p-2 gap-4">type 6</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
