import React from "react";
import "./Header.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">WHOBA OGO</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <IoMdNotificationsOutline />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <TbWorld />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <IoSettingsOutline />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
