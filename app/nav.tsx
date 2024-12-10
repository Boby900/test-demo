import {  House, MessageCircle, MonitorPlay, ShoppingBag, UserRound } from "lucide-react";
import Dropdown from "./dropDown";

export default function Nav() {
    return (
      <div className="border-2 p-2 m-2">
      <nav>
        <ul className="flex gap-4 justify-between p-4 m-4">
            <li><span><a href="#"><House /></a></span></li>
            <li><span><a href="#"><UserRound /></a></span></li>
            <li><span><a href="#"><MessageCircle /></a></span></li>
            <li><span><a href="#"><MonitorPlay /></a></span></li>
            <li><span><a href="#"><Dropdown /></a></span></li>
            <li><span><a href="#"><ShoppingBag /></a></span></li>
        </ul>
      </nav>

      </div>
    );
  }
  