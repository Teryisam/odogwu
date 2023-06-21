import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import odogwu from "./ODOGWU.svg";

function Landing() {
  const [customer, setCustomer] = React.useState({
    email: "",
    password: "",
  });

  // localStorage.clear();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setCustomer((prevcustomer) => ({
      ...prevcustomer,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:3030/api/items/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
    .then((response) => response.json())
    .then(localStorage.clear())
    .then((json) => {
      console.log(json)
      if (json.error) {
        toast.error(json.error);
      } else if ((json.role)) {
        localStorage.setItem("customer", JSON.stringify(json));
        window.location.href = "/dashboard";
      } else {
        localStorage.setItem("customer", JSON.stringify(json));
        window.location.href = "/userview2";
      }
    });
  }

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   // fetch("http://localhost:5000/api/employees/login", {
  //   fetch("http://localhost:3030/api/items/login", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(customer),
  //   })
  //     .then((response) => response.json())
  //     .then(localStorage.clear())
  //     .then((json) => {
  //       if (json.error) {
  //         toast.error(json.error);
  //         console.log(json.message);
  //         console.log(json.email);
  //       } else {
  //         if (json.email = "dele@gmail.com") {
  //           localStorage.setItem("customer", JSON.stringify(json));
  //           window.location.href = "/userview2";
  //         } else {
  //           localStorage.setItem("customer", JSON.stringify(json));
  //           window.location.href = "/dashboard";
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // window.location.href="/"
  //   // navigate("/userdash");
  // }

  return (
    // <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 absolute inset-0 z-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={odogwu} alt="ODOGWU Plc" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
            Sign in to your account
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
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-100"
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
                  autoComplete="email"
                  placeholder="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-green-200 hover:text-green-400"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={customer.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  placeholder="password"
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
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-200">
            Not yet signed up?{" "}
            <a
              href="/signuppage2"
              className="font-semibold leading-6 text-green-200 hover:text-green-400"
            >
              {" "}
              Open an account now!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Landing;
