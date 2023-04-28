import React from "react";

const Image = ({ source, alt, className, ...props }) => {
  return <img src={source} alt={alt} className={className} {...props} />;
};

export default Image;
