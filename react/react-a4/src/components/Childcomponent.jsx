import React from "react";

function ChildComponent({firstname, lastname, age}){
    return(
        <div>
            <p>
                firstname: {firstname} <br />
                lastname: {lastname} <br />
                age: {age} <br />
            </p>
        </div>
    );
}
export default ChildComponent