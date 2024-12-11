"use client";
import { BellDot } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import type { Notification } from "../db/schema";
function Dropdown() {
  // const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [bgToggled, setBgToggled] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleBackgroundColor = () => {
    setBgToggled(!bgToggled);
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch("/api"); // Adjust the path as needed
        if (!res.ok) {
          throw new Error("Failed to fetch notifications");
        }
        const data = await res.json();
        setNotifications(data);
        setIsLoading(false);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <button onClick={toggleDropdown}>
        <a href="#">
          <BellDot />
        </a>
      </button>

      {isOpen && (
        <div className="flex flex-col max-w-[300px] gap-4 bg-gray-600 p-4 m- absolute  right-[50px] sm:right-[150px] top-[70px]  ">
          <div>
            <button
              className="border-2 p-2 rounded-lg bg-white text-blue-600 font-bold min-w-full"
              onClick={toggleBackgroundColor}
            >
              {bgToggled?(<p>Mark all as unread</p>): (<p>Mark all as read</p>)}
            </button>
          </div>
          <div 
          className={`p-4 transition-colors duration-500 ${
            bgToggled ? "bg-gray-400" : "bg-gray-800"
          }`}
          >
            {isLoading ? (
              <p>loading...</p>
            ) : (
              <ul className="flex flex-col gap-3">
                {notifications.map((notification) => (
                  <li className="p-2 border" key={notification.id}>
                    <strong>{notification.type}</strong>: {notification.content}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
