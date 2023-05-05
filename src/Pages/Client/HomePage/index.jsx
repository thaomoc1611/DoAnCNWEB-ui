import React from "react";
import HeaderClient from "../../../components/Molecules/Client/HeaderClient";
import SlideImage from "../../../components/Molecules/Client/SlideImage";
import Main from "../../../components/Organisms/Client/Main";

const HomePage = () => {
  return (
    <div>
      <HeaderClient></HeaderClient>
      <SlideImage></SlideImage>
      <Main />
    </div>
  );
};

export default HomePage;
