import React from "react";
import Childcomponent from "./Childcomponent";

function ParentComponent(){
    return(
        <div>
            <h2>Parent Component</h2>
            <Childcomponent firstname={'joe'} lastname={'john'} age={23} />
        </div>
    );
}
export default ParentComponent