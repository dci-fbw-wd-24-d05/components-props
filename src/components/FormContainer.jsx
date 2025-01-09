import React from "react";

function FormContainer() {
  return (
    <div>
      <form action="">
        <label htmlFor="search">Search:</label>
        <input type="text" placeholder="image" id="search" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormContainer;
