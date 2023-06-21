import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

// const people = [
//     {
//       name: 'Leslie Alexander',
//       email: 'leslie.alexander@example.com',
//       role: 'Co-Founder / CEO',
//       imageUrl:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       lastSeen: '3h ago',
//       lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//       name: 'Michael Foster',
//       email: 'michael.foster@example.com',
//       role: 'Co-Founder / CTO',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       lastSeen: '3h ago',
//       lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//       name: 'Dries Vincent',
//       email: 'dries.vincent@example.com',
//       role: 'Business Relations',
//       imageUrl:
//         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       lastSeen: null,
//     },
//     {
//       name: 'Lindsay Walton',
//       email: 'lindsay.walton@example.com',
//       role: 'Front-end Developer',
//       imageUrl:
//         'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       lastSeen: '3h ago',
//       lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//       name: 'Courtney Henry',
//       email: 'courtney.henry@example.com',
//       role: 'Designer',
//       imageUrl:
//         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       lastSeen: '3h ago',
//       lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//       name: 'Tom Cook',
//       email: 'tom.cook@example.com',
//       role: 'Director of Product',
//       imageUrl:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       lastSeen: null,
//     },
//   ]

export default function List() {
  const [customers, setCustomers] = React.useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // await fetch("http://localhost:5000/api/employees", {
        await fetch("http://localhost:3030/api/items", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(customer),
        })
          // const response;
          .then((response) => response.json())
          .then((json) => {
            setCustomers(json);
            console.log(customers);
            console.log(json);
          });
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // const editCustomer = (e, _id) => {
  const editCustomer = (e, id) => {
    e.preventDefault();
    // navigate("/customerupdateadmin");
    // window.location.href = `/edit/${_id}`
  window.location.href = `/edit/${id}`
  };

  // const deleteCustomer = (e, _id) => {
  const deleteCustomer = (e, id) => {
    e.preventDefault();
    // console.log(_id)
    console.log(id)
    // fetch("http://localhost:5000/api/employees/"+{id}, { method: "DELETE" }).then(
    axios
      // .delete(`http://localhost:5000/api/employees/${_id}`)
      .delete(`http://localhost:3030/api/items${id}`)
      .then((response) => {
        toast.error(response.message);
        if (customers) {
          setCustomers((prevElement) => {
            // return prevElement.filter((customer) => customer._id !== _id);
            return prevElement.filter((customer) => customer.id !== id);
          });
        }
      });
  };

  const img1 = (
    <svg
      class="h-12 w-12 text-gray-300"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        clip-rule="evenodd"
      />
    </svg>
  );

  return (
    <>
      {!loading && (
        <ul role="list" className="divide-y divide-green-400 px-15 pb-10">
          {customers.map((customer) => (
            <li
              key={customer._id}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex gap-x-4">
                {img1}
                {/* <img
              className="h-12 w-12 flex-none rounded-full bg-green-50"
              src={img1}
              alt=""
            /> */}
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-green-900">
                    {customer.firstName + " " + customer.lastName}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-green-500">
                    {customer.email}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex  sm:items-end">
                <a
                  // onClick={(e, _id) => editCustomer(e, customer._id)}
                  onClick={(e, id) => editCustomer(e, customer.id)}
                  // href="#"
                  className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 items-center mr-4"
                >
                  Edit
                </a>
                <a
                  // onClick={(e, _id) => deleteCustomer(e, customer._id)}
                  onClick={(e, id) => deleteCustomer(e, customer.id)}
                  // href="#"
                  className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 items-center"
                >
                  Delete
                </a>
                {/* <button><p className="text-sm leading-6 text-red-600">Click to DELETE</p></button> */}
                {/* {customer.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-green-500">
                  Last seen <time dateTime={customer.lastSeenDateTime}>{customer.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-green-500">Online</p>
                </div>
              )} */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
