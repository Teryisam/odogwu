import { PaperClipIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import odogwu from "./ODOGWU.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function UserView({ customers }) {
  // const [customers, setCustomers] = useState({});

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("customer"));
  //   // window.location.href="/customerupdate"
  //   if (!data) {
  //     window.location.href = "/";
  //   } else {
  //     setCustomers(data);
  //     console.log("console logged =====>>>>>", data);
  //     // setLoading(1)
  //     //   console.log(loading)
  //   }
  // }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="mx-auto">
        <div className="px-4 sm:px-0">
          {/* <h3 className="text-base font-semibold leading-7 text-gray-900">odogwu</h3> */}
          {/* <img className="mx-auto h-10 w-auto" src={odogwu} alt="ODOGWU Plc" /> */}
          <p className="mt-6 max-w-2xl text-lg leading-6 text-gray-500 ml-12">
            Personal details.
          </p>
        </div>
        <div className="mt-6 ml-12 border-t w-auto mx-auto justify-center inset-0 border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-large leading-6 text-gray-900">
                Full name
              </dt>
              <dd className="mt-1 text-lg font-large leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {customers.firstName + " " + customers.lastName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-large leading-6 text-gray-900">
                Account Type
              </dt>
              <dd className="mt-1 text-lg font-large leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {customers.acctType} Account
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-large leading-6 text-gray-900">
                Email address
              </dt>
              <dd className="mt-1 text-lg font-large leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {customers.email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-large leading-6 text-gray-900">
                Account Balance
              </dt>
              <dd className="mt-1 text-lg font-large leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                $120,000
              </dd>
            </div>
            {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div> */}
          </dl>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
