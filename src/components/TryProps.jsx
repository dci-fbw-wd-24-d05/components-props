import React from "react";

function TryProps(props) {
  console.log(props);

  return (
    <div>
      Hallo {props.firstN} {props.lastN}
    </div>
  );
}

export default TryProps;
