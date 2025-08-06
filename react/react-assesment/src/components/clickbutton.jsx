import React from "react";
const Clickbutton = () => {
    const handleClick = () =>{
        console.log("hello world")
}
return(
    <div>
      <button onClick={handleClick}>
        Click
      </button>
    </div>
  );
}
export default Clickbutton;