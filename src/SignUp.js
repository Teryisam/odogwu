import React from "react";
import odogwu from "./ODOGWU.svg";
import "./index.css";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import Sliding from "./Sliding.jsx";

function SignUp() {
  const [customer, setCustomer] = React.useState({
    name: "",
    email: "",
    bvn: "",
    password: "",
    confirmPassword: "",
  });
  console.log(customer);

  const navigate = useNavigate();

  function handleChange(event) {
    console.log(event);
    const { name, value, type, checked } = event.target;

    setCustomer((prevcustomer) => {
      return {
        ...prevcustomer,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    // if (type ==="password") {
    // if (validator.isStrongPassword(value, {
    //     minLength: 7, minLowercase: 1,
    //     minUppercase: 1, minNumbers: 1, minSymbols: 1
    //   })) {
    //     setErrorMessage('Password is strong')
    //   } else {
    //     setErrorMessage('Password is not strong. Password must be 7 characters long, contain a special character, one uppercase letter and a figure/number.')
    //   }}
  }

  const [errorMessage, setErrorMessage] = React.useState("");
  console.log(errorMessage);

  function handleSubmit(event) {
    event.preventDefault();
    if (customer.acctType) {
      if (customer.password === customer.confirmPassword) {
        fetch("http://SADEYONGO-PC.nibss-plc.com:8080/api/v1/create-user", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(customer),
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            if (json.status) {
              toast.error(json.message);
              console.log(json.message);
            } else {
              localStorage.setItem("customer", JSON.stringify(json));
              window.location.href = "/userdash";
            }
          })
          // .then(localStorage.setItem("customer", JSON.stringify(customer) ))
          .catch((error) => {
            toast.error(error);
            console.log(error);
          });
        // .then(navigate("/"))
      } else {
        setErrorMessage("Password does not match");
        toast.error(errorMessage);
      }
    } else {
      setErrorMessage("Please select account type");
      toast.error(errorMessage);
    }
  }

  return (
    // <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <>
      {/* <div className="overlay"></div>
      <Sliding /> */}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 absolute inset-0 z-10 content">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={odogwu} alt="ODOGWU Plc" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome! Signup for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            action="#"
            method="POST"
          >
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={customer.name}
                  onChange={handleChange}
                  autocomplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={customer.email}
                  onChange={handleChange}
                  autocomplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Bvn
              </label>
              <div className="mt-2">
                <input
                  id="bvn"
                  name="bvn"
                  type="text"
                  value={customer.bvn}
                  onChange={handleChange}
                  autocomplete="bvn"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={customer.password}
                  onChange={handleChange}
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={customer.confirmPassword}
                  onChange={handleChange}
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/"
              className="font-semibold leading-6 text-green-600 hover:text-green-800"
            >
              {" "}
              Click here to Login!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
