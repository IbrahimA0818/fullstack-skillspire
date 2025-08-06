import React from "react";
const Userprofileinfo = ({name, bio, avatarURL}) => {
    return(
        <div style={{ color: 'black', padding: '20px', textAlign: 'center' }}>
            <img src={avatarURL || "https://via.placeholder.com/100x100"}
            alt="avatar"
            style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
            />
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
    );
};
export default Userprofileinfo;