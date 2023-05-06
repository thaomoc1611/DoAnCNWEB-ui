import React from "react";
import Card from "../Card";
import "./ListProductStyle.scss";

const ListProduct = ({products}) => {
  return (
    <ul className="list-product">
      {products.map((product, index) => (
        <li key={index} className="list-product-item">
          <Card
            img={product.img}
            href={product.href}
            title={product.title}
            price={product.price}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListProduct;
