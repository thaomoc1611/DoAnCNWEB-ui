import React from "react";
import Card from "../Card";
import "./ListProductStyle.scss";

const ListProduct = ({products}) => {
  return (
    <ul>
      {products.map((product) => (
        <li>
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
