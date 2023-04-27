import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const signinInitialValues = {
    email: "",
    password: "",
  };

  const [login, setLogin] = useState(signinInitialValues);
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  console.log(login);

  const loginUser = () => {
    console.log("called");
    axios
      .post("http://localhost:8000/login", login)
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
    <div className="logo-box">
      {/* <h1 className="cross">X</h1> */}
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M22.991 3.95a1 1 0 0 0-1.51-.86a7.48 7.48 0 0 1-1.874.794a5.152 5.152 0 0 0-3.374-1.242a5.232 5.232 0 0 0-5.223 5.063a11.032 11.032 0 0 1-6.814-3.924a1.012 1.012 0 0 0-.857-.365a.999.999 0 0 0-.785.5a5.276 5.276 0 0 0-.242 4.769l-.002.001a1.041 1.041 0 0 0-.496.89a3.042 3.042 0 0 0 .027.439a5.185 5.185 0 0 0 1.568 3.312a.998.998 0 0 0-.066.77a5.204 5.204 0 0 0 2.362 2.922a7.465 7.465 0 0 1-3.59.448A1 1 0 0 0 1.45 19.3a12.942 12.942 0 0 0 7.01 2.061a12.788 12.788 0 0 0 12.465-9.363a12.822 12.822 0 0 0 .535-3.646l-.001-.2a5.77 5.77 0 0 0 1.532-4.202Zm-3.306 3.212a.995.995 0 0 0-.234.702c.01.165.009.331.009.488a10.824 10.824 0 0 1-.454 3.08a10.685 10.685 0 0 1-10.546 7.93a10.938 10.938 0 0 1-2.55-.301a9.48 9.48 0 0 0 2.942-1.564a1 1 0 0 0-.602-1.786a3.208 3.208 0 0 1-2.214-.935q.224-.042.445-.105a1 1 0 0 0-.08-1.943a3.198 3.198 0 0 1-2.25-1.726a5.3 5.3 0 0 0 .545.046a1.02 1.02 0 0 0 .984-.696a1 1 0 0 0-.4-1.137a3.196 3.196 0 0 1-1.425-2.673c0-.066.002-.133.006-.198a13.014 13.014 0 0 0 8.21 3.48a1.02 1.02 0 0 0 .817-.36a1 1 0 0 0 .206-.867a3.157 3.157 0 0 1-.087-.729a3.23 3.23 0 0 1 3.226-3.226a3.184 3.184 0 0 1 2.345 1.02a.993.993 0 0 0 .921.298a9.27 9.27 0 0 0 1.212-.322a6.681 6.681 0 0 1-1.026 1.524Z"
        />
      </svg>
      <h2>Sign In to Twitter</h2>
      <button>
        <a
          href="https://www.freepnglogos.com/pics/google-logo"
          title="Image from freepnglogos.com"
        >
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            width="200"
            alt="google-logo"
          />
        </a>
        Sign in with Google
      </button>
      <button>
        <a
          href="https://www.freepnglogos.com/pics/png-apple-logo"
          title="Image from freepnglogos.com"
        >
          <img
            src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"
            width="200"
            alt="apple-logo"
          />
        </a>
        Sign in with Apple
      </button>
      <hr></hr>
      <span>Or</span>
      <br />
      <form onSubmit={onSubmitForm}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={login.value}
          required
          onChange={(e) => {
            onValueChange(e);
          }}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          value={login.value}
          onChange={(e) => {
            onValueChange(e);
          }}
        />
        <button
          className="next"
          type="submit"
          onClick={() => {
            loginUser();
          }}
        >
          Next
        </button>
      </form>
      <button className="forget-password">Forget Password</button>
      <p>
        Don't Have an account?<a className="signup"> Sign up</a>
      </p>
    </div>
  );
};

export default Login;
