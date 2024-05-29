import React, { useState } from "react";
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [inputName, SetInputName] = useState("");
  const [inputEmail, SetInputEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [submit, setsubmit] = useState(false);
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const varify = () => {
      let valid = true;

      let errorHandler = {
        firstName: {
          errorStatus: false,
          errorDetails: "",
        },
        Email: {
          errorStatus: false,
          errorDetail: "",
        },
        password: {
          errorStatus: false,
          errorDetail: "",
        },
        cPassword: {
          errorStatus: false,
          errorDetail: "",
        },
      };

      if (inputName.length === 0) {
        errorHandler.firstName.errorStatus = true;
        errorHandler.firstName.errorDetail = "Name must be required";
        valid = false;
      } else if (inputName.length < 4) {
        errorHandler.firstName.errorStatus = true;
        errorHandler.firstName.errorDetail =
          "Name must be at least 4 characters";
        valid = false;
      }

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
        errorHandler.password.errorDetail = "Password must be 4 characters";
        valid = false;
      }

      if (Cpassword.length === 0) {
        errorHandler.cPassword.errorStatus = true;
        errorHandler.cPassword.errorDetail =
          "Confirm password must be required";
        valid = false;
      } else if (Cpassword.length !== 4) {
        errorHandler.cPassword.errorStatus = true;
        errorHandler.cPassword.errorDetail =
          "Confirm password must be 4 characters";
        valid = false;
      }

      if (!(Password === Cpassword)) {
        errorHandler.cPassword.errorStatus = true;
        errorHandler.cPassword.errorDetail =
          " ! Confirm password not match  please Enter Right Password";
        valid = false;
      }

      setError(errorHandler);
      return valid;
    };
    setsubmit(true);
    // eslint-disable-next-line no-undef
    if (varify()) {
      toast.success("Successfully toasted!");
      SetInputName("");
      SetInputEmail("");
      setPassword("");
      setCPassword("");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div class="OuterSignupForm">
        <Toaster position="top-center" reverseOrder={true} />

        <form class="formPageCss">
          <h1>Registration</h1>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Full Name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={inputName}
              onChange={(e) => SetInputName(e.target.value)}
            />
            <p className="text-danger">
              {submit &&
                error.firstName.errorStatus &&
                `${error.firstName.errorDetail}`}
            </p>
          </div>

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
          <div class="mb-3">
            <label for="exampleInputPassword3" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword3"
              value={Cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            <p className="text-danger">
              {submit &&
                error.cPassword.errorStatus &&
                `${error.cPassword.errorDetail}`}
            </p>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
