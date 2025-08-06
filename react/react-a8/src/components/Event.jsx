


import React from "react";

function Event() {
  const handleClick = () => {
    console.log("Hello world");
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Event;
