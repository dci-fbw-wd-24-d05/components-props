import "./App.css";
import ImageContainer from "./components/ImageContainer";
import TryProps from "./components/TryProps";

function App() {
  const firstName = "John";
  return (
    <>
      <h1>Create New component</h1>
      <ImageContainer
        title="Beach"
        imageLink="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww"
        discription="Palma Beach"
      />

      <ImageContainer
        title="Animal"
        imageLink="https://img.freepik.com/fotos-premium/eichhoernchen-sitzt-auf-einem-baumzweig_1048944-30371835.jpg?w=1060"
        discription="Dangerous Animal"
      />

      <TryProps firstN={firstName} lastN="Bach" />
      <TryProps firstN="Mohab" lastN="Alyusof" />
    </>
  );
}

export default App;
