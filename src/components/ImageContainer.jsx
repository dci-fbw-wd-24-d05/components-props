import React from "react";
import ImageDescription from "./ImageDescription";

function ImageContainer({ title, imageLink, discription }) {
  // const {title, imageLink, discription} = props;
  return (
    <div>
      <h3>{title}</h3>
      <img src={imageLink} alt="beach image" />
      <ImageDescription discription={discription} />
    </div>
  );
}

export default ImageContainer;
