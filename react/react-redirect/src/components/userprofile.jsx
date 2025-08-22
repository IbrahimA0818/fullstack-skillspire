import {useLocation} from "react-router-dom"

function UserProfile(){
    const location = useLocation();
    const username = location.state?.username || 'Guest';


return (
    <div>
        <h2>Hello {username}</h2>
    </div>
);
}


export default UserProfile;