import ImageDescription from "./ImageDescription";

function ImageContainer({ title, imageLink, discription }) {
  // const {title, imageLink, discription} = props;
  return (
    <div>
      <h3>{title}</h3>
      <img src={imageLink} alt="beach image" />
      <ImageDescription discription={discription} />
      {/* <p>{discription}</p> */}
    </div>
  );
}

export default ImageContainer;
