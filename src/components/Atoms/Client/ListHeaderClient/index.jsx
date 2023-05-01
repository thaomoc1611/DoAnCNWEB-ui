import React from "react";
import "./ListHeaderStyle.scss";
import { NavLink } from "react-router-dom";
const ListHeaderClient = () => {
  return (
    <ul className="menu">
      <li className="menu-ip active">
        <NavLink to="/iphone">
          <span>iPhone</span>
        </NavLink>
      </li>
      <li className="menu-mac ">
        <NavLink to="/mac">
          <span>Mac</span>
        </NavLink>
      </li>
      <li className="menu-ipad ">
        <NavLink to="/ipad">
          <span>iPad</span>
        </NavLink>
      </li>
      <li className="menu-watch ">
        <NavLink to="/apple-watch">
          <span>Watch</span>
        </NavLink>
      </li>
      <li className="menu-sound ">
        <NavLink to="/am-thanh">
          <span>Âm thanh</span>
        </NavLink>
      </li>
      <li className="menu-access ">
        <NavLink to="/phu-kien">
          <span>Phụ kiện</span>
        </NavLink>
      </li>
      <li className="menu-news ">
        <NavLink to="/tekzone">
          <span>TekZone</span>
        </NavLink>
      </li>
      <li className="menu-access ">
        <NavLink to="/topcare">
          <span>TopCare</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default ListHeaderClient;
