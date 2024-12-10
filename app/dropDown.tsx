"use client";
import { BellDot } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import type { Notification } from "./db/schema";
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
          <div style={{ backgroundColor: bgColor }}>
            <ul>
              {notifications.map((notification) => (
            <li key={notification.id}>
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
