import "./App.css";

function App() {
  const randomNum = Math.floor(Math.random() * 10);
  return (
    <>
      <h1>Create New component</h1>
      {randomNum % 2 === 0 ? (
        <p>{randomNum} number is even</p>
      ) : (
        <p>{randomNum} number is odd</p>
      )}
    </>
  );
}

export default App;
