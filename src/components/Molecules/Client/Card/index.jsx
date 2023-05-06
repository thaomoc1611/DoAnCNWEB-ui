import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../../../Atoms/Common/Image";
import "./CardStyle.scss";
import { products } from "../../../../assets/images";

function Card({ img, title, href, price = null }) {
  return (
    <div className="card">
      <NavLink to={href} className="card-link">
        <div className="card-img">
          <Image source={products.image1} className="card-img-sp" />
        </div>
        <h3 className="card-title">{title}</h3>
        {price && <span className="card-price">{price}</span>}
      </NavLink>
    </div>
  );
}

export default Card;
