import React from "react";
import { useState } from "react";

function ToggleMessage(){


const [show, setShow] = useState(false);

return(
    <div>
        <button onClick={() => setShow(!show)}>toggle message</button>
    
    {show &&<p>message</p>}
    </div>
)
}
export default ToggleMessage;