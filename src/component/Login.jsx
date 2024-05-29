import React, { useState } from "react";
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [inputEmail, SetInputEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [submit, setsubmit] = useState(false);
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const varify = () => {
      let valid = true;

      let errorHandler = {
        Email: {
          errorStatus: false,
          errorDetail: "",
        },
        password: {
          errorStatus: false,
          errorDetail: "",
        },
      };

      if (inputEmail.length === 0) {
        errorHandler.Email.errorStatus = true;
        errorHandler.Email.errorDetail = "Email must be required";
        valid = false;
      } else if (!inputEmail.endsWith("@gmail.com")) {
        errorHandler.Email.errorStatus = true;
        errorHandler.Email.errorDetail = "Please Enter Right Email";
        valid = false;
      }

      if (Password.length === 0) {
        errorHandler.password.errorStatus = true;
        errorHandler.password.errorDetail = "Password must be required";
        valid = false;
      } else if (Password.length !== 4) {
        errorHandler.password.errorStatus = true;
        errorHandler.password.errorDetail = "Password must be 4 char's";
        valid = false;
      }

      setError(errorHandler);
      return valid;
    };
    setsubmit(true);
    // eslint-disable-next-line no-undef
    if (varify()) {
      toast.success("Successfully toasted!");

      SetInputEmail("");
      setPassword("");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div class="OuterLoginForm">
        <Toaster position="top-center" reverseOrder={true} />

        <form class="formPageCss">
          <h1>LogIn</h1>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              value={inputEmail}
              onChange={(e) => SetInputEmail(e.target.value)}
            />
            <p className="text-danger">
              {submit &&
                error.Email.errorStatus &&
                `${error.Email.errorDetail}`}
            </p>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword2"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-danger">
              {submit &&
                error.password.errorStatus &&
                `${error.password.errorDetail}`}
            </p>
          </div>

          <button type="submit" onClick={handleSubmit}>
            login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
