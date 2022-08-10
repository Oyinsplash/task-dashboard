import React from "react";
import "./Style.css";
import { ReactComponent as NotificationBell } from "../../../assets/icons/notification.svg";
import DisplayPicture from "../../../assets/icons/dp.png";
import { ReactComponent as DropDown } from "../../../assets/icons/dropdown.svg";
import {Input} from "../../atoms";
import { ReactComponent as Search } from "../../../assets/icons/search.svg";
function TopNavBar() {
  return (
    <header className="topnav_wrapper">
      <div className="right">
        <Input
          className="nav-input"
          type="text"
          placeholder="Search anything..."
          icon={<Search />}
        />
        <div className="nav-menu">
          <a href="#news">
            <NotificationBell />
          </a>
          <a href="#contact">
            <img src={DisplayPicture} alt="DisplayPicture" />
          </a>
          <a href="#about">
            <DropDown />
          </a>
        </div>
      </div>
    </header>
  );
}

export default TopNavBar;
