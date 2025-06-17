import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isLogin, setLogin] = useState("LOGIN");
  const login = async (e) => {
    e.preventDefault();
    const { email, password, username } = userDetails;
    try {
      let url =
        isLogin === "REGISTER"
          ? "http://127.0.0.1:8080/register"
          : "http://127.0.0.1:8080/login";
      let login = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body:  isLogin === "REGISTER"? JSON.stringify({ email, password, username }) :JSON.stringify({ email, password }),
      });
      let res = await login.json();
      let userDetails = res.userDetails;
      localStorage.setItem("token", res.token);
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      if (isLogin === "LOGIN" && !res.passWrdVerify) {
        toast.error(`${res.message} - ${res.error}`);
        return;
      } else if (isLogin !== "LOGIN") {
        toast.error(`${res.message} - ${res.error}`);
        return;
      }
      toast.success("Login Successful");
      navigate('/dashboard/expense-list')
    } catch (e) {
      console.log(e.message);
      // localStorage.removeItem();
      toast.error(e.message);
    }
  };
  const reSetForm = () => {
    setUserDetails({ username: "", email: "", password: "" });
  };
  return (
    <>
     <div className="container">
       {isLogin === "REGISTER" ? (
          <>
            <form className="formDiv" onSubmit={(e) => login(e)}>
              <h1>Create Account </h1>
              <h1>to continue expense tracker</h1>
              <label>Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={userDetails.username}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, username: e.target.value })
                }
              ></input>
              <label>Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              ></input>
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              ></input>
              <button type="submit">Continue</button>
              <span className="alignCenter">
                Have an account ? {"  "}
                <span
                  className="linkFont"
                  onClick={() => {
                    setLogin("LOGIN");
                    reSetForm();
                  }}
                >
                  Sign in
                </span>
              </span>
            </form>
          </>
        ) : (
          <>
            <form className="formDiv" onSubmit={(e) => login(e)}>
              <h1>Welcome</h1>

              <label>Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              ></input>
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              ></input>
              <span>Forget Password</span>
              <button type="submit">Continue</button>
              <span className="alignCenter">
                no account ? {" "}
                <span
                  className="linkFont"
                  onClick={() => {
                    setLogin("REGISTER");
                    reSetForm();
                  }}
                >
                  Sign up
                </span>
              </span>
            </form>
          </>
        )} 
        </div>
    </>
  );
}

export default Login;
