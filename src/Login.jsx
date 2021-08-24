import React, { useState } from 'react'

const Login = () => {

    const [user, setUser] = useState({
        name: "",
        password: "",
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
    }
    const postData = async (e) => {
        e.preventDefault();

        const { name, password } = user;
        if (name && password) {
            const res = await fetch("https://login-authentication-d8235-default-rtdb.firebaseio.com/loginform.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        password,
                    })

                });

            if (res) {
                setUser({
                    name: "",
                    password: "",
                });
                alert("Wel Come User");
            }
        } else {
            alert("Plz fill the data")
        }

    }

    return (
        <>
            <div className="main-div">

                <img className="wave" src="./wave.png" />
                <div className="container">
                    <div className="img">
                        <img src="./bg.svg" className="up-down" />
                    </div>
                    <div className="login-content">
                        <form action="index.html" method="POST">
                            <img src="./avatar.svg" />
                            <h2 className="title">ROYAL WEB</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>

                                <div className="div">
                                    <input type="text" className="input" placeholder="Enter Your Name"
                                        name="name"
                                        value={user.name}
                                        onChange={getUserData}
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>

                                <div className="div">
                                    <input type="password" className="input" placeholder="Enter Your Password"
                                        name="password"
                                        value={user.password}
                                        onChange={getUserData}
                                        autoComplete="off"
                                        required />
                                </div>

                            </div>
                            <a href="#">Forgot Password?</a>
                            <input type="submit" className="btn" value="Login" onClick={postData}
                                required
                            />
                        </form>
                    </div>
                </div>
                <script type="text/javascript" src="js/main.js"></script>
            </div>
        </>
    )

}
export default Login;
