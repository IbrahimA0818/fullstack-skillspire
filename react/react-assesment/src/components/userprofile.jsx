import React from "react";
import Userprofileheader from "./userprofileheader";
import Userprofileinfo from "./userprofileinfo";
import Userprofileposts from "./userprofileposts";

const Userprofile = ({name, bio, avatarURL}) => {
    return(
        <div style={{maxWidth:"500px", margin:"20px auto", border:"1px solid #333"}}>
            <Userprofileheader />
            <Userprofileinfo 
            name={name}
            bio={bio}
            avatarURL={avatarURL}/>
            <Userprofileposts />
        </div>
    );
};
export default Userprofile;