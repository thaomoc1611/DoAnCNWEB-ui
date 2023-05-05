import React from "react";
import "./HeaderClientStyle.scss";
import ListHeaderClient from "../../../Atoms/Client/ListHeaderClient";
import { NavLink } from "react-router-dom";
import { images } from "../../../../assets/images";
import Image from "../../../Atoms/Common/Image";
import { FiSearch } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
const HeaderClient = () => {
  return (
    <header className="">
      <div className="head">
        <div className="logo">
          <NavLink to="">
            <Image className="Logo_logo" source={images.logo}></Image>
          </NavLink>
          <NavLink to="">
            <Image className="Logo_author" source={images.ARPlogo}></Image>
          </NavLink>
        </div>
        <ListHeaderClient />
        <div className="search-cart">
          <div className="search-sp">
            <FiSearch className="icon-search"></FiSearch>
          </div>
          <NavLink to="/cart" className="cart">
            <BiShoppingBag className="icon_cart"></BiShoppingBag>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default HeaderClient;
