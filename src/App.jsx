import "./App.css";
import ImageContainer from "./components/ImageContainer";
import beaches from "./data/beachs.json";

function App() {
  return (
    <>
      <h1>Create New component</h1>
      {beaches.map((beach) => {
        return (
          <ImageContainer
            key={crypto.randomUUID()}
            title={beach.title}
            imageLink={beach.image}
            discription={beach.description}
          />
        );
      })}
    </>
  );
}

export default App;
