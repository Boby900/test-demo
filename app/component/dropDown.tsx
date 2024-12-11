"use client";
import { BellDot } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import type { Notification } from "../db/schema";
function Dropdown() {
  // const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("black");
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const changeBackgroundColor = () => {
    setBgColor("gray");
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch("/api"); // Adjust the path as needed
        if (!res.ok) {
          throw new Error("Failed to fetch notifications");
        }
        const data = await res.json();
        setNotifications(data)
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <button onClick={toggleDropdown} className="relative">
        <a href="#"><BellDot /></a>
      </button>

      {isOpen && (
        <div className="flex flex-col max-w-[300px] gap-4 bg-gray-600 p-4 m- absolute  right-[150px] top-[70px]  ">
          <div>
          
              <button className="border-2 p-2 rounded-lg bg-white text-blue-600 font-bold min-w-full" onClick={changeBackgroundColor}>Mark all as read</button>
         
          </div>
          <div style={{ backgroundColor: bgColor }}>
            <ul className="flex flex-col gap-3">
              {notifications.map((notification) => (
            <li className="p-2 border" key={notification.id}>
              <strong>{notification.type}</strong>: {notification.content}
            </li>
          ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
