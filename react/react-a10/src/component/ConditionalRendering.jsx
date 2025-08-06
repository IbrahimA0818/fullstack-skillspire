import React, {useState} from "react";
function Conditionalrendering() {
    const [isVisible] = useState(true);
  return (
    <div className="App">
        {isVisible && <div>u can see this</div>};
        {!isVisible && <div> u cant see this</div>}
      
    </div>
  );
} 

export default Conditionalrendering;