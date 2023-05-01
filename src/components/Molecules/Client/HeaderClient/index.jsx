import React from "react";
import "./HeaderClientStyle.scss";
import ListHeaderClient from "../../../Atoms/Client/ListHeaderClient";

const HeaderClient = () => {
  return (
    <header className="">
      <div className="head">
        <ListHeaderClient />
      </div>
    </header>
  );
};

export default HeaderClient;
