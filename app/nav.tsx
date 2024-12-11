import {  House, MessageCircle, MonitorPlay, ShoppingBag, UserRound } from "lucide-react";
import Dropdown from "./component/dropDown";

export default function Nav() {
    return (
      <div className="border-b-4 border-indigo-500 p-2 m-2">
      <nav>
        <ul className="flex gap-4 justify-between p-4 m-4">
            <li><span><a href="#"><House /></a></span></li>
            <li><span><a href="#"><UserRound /></a></span></li>
            <li><span><a href="#"><MessageCircle /></a></span></li>
            <li><span><a href="#"><MonitorPlay /></a></span></li>
            <li><span><Dropdown /></span></li>
            <li><span><a href="#"><ShoppingBag /></a></span></li>
        </ul>
      </nav>

      </div>
    );
  }
  