import React from "react";
import ImageDescription from "./ImageDescription";

function ImageContainer() {
  return (
    <div>
      <h3>Bild from unsplash</h3>
      <img
        src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww"
        alt="beach image"
      />
      <ImageDescription />
    </div>
  );
}

export default ImageContainer;
