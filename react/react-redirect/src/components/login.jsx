import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()){
            navigate('/profile', {state:{username}})
        }
    };
	return (
		<div>
            <h1>log in</h1>
			<form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Enter username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <button type="submit">login</button>
            </form>
		</div>
	);
}

export default Login;
