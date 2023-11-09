import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  const navigate = useNavigate();
  const { _id } = useParams();
  const job = details.find((item) => item._id === _id);

  const [bid, setBid] = useState({
    price: 0,
    deadline: "",
    email: user ? user.email : "",
    buyerEmail: job.employerEmail,
    jobTitle: job.jobTitle,
    status: "Pending",
  });

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const handleBidSubmit = (e) => {
    e.preventDefault();
    console.log(bid);
  };

  const addToBids = async () => {
    const itemToAdd = {
      price: bid.price,
      deadline: bid.deadline,
      email: bid.email,
      buyerEmail: bid.buyerEmail,
      jobId: job._id,
      jobTitle: job.jobTitle,
      status: bid.status,
    };

    fetch("https://job-book-server.vercel.app/bidjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemToAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Successfully Bid this Job!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate("/my-bids");
          }, 2000);
        }
      });
  };

  useEffect(() => {
    document.title = "Job-Book|Details";
    const favicon = document.querySelector("link[rel*='icon']");
    favicon.href = "/public/details.png";
  }, []);

  return (
    <div className="p-6">
      <Helmet>
        <title>Job-Book | Details</title>
      </Helmet>
      <h1 className="text-xl lg:text-3xl font-bold text-center text-red-500 mb-4">
        Job Title: {job.jobTitle}
      </h1>
      <p className="text-gray-500 text-center">
        Deadline: {formatDate(job.deadline)}
      </p>
      <p className="text-gray-500 text-center mb-5">
        Price Range: ${job.minPrice} - ${job.maxPrice}
      </p>
      <p className="text-gray-500">Description: {job.description}</p>

      <h2 className="text-2xl font-semibold text-center bg-slate-600 text-white w-5/6 lg:w-2/6 mx-auto py-2 mt-6">
        Place Your Bid
      </h2>
      <form
        onSubmit={handleBidSubmit}
        className="mt-4 w-5/6 lg:w-2/6 bg-slate-200 mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="price" className="text-gray-700">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={bid.price}
            onChange={(e) => setBid({ ...bid, price: e.target.value })}
            required
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deadline" className="text-gray-700">
            Deadline:
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={bid.deadline}
            onChange={(e) => setBid({ ...bid, deadline: e.target.value })}
            required
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-700">
            Email (Your Email):
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={bid.email}
            readOnly
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="buyerEmail" className="text-gray-700">
            Buyer Email:
          </label>
          <input
            type="text"
            id="buyerEmail"
            name="buyerEmail"
            value={bid.buyerEmail}
            readOnly
            className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          onClick={addToBids}
          disabled={user && user.email === job.employerEmail}
          className={`block w-full px-4 py-2 text-white ${
            user && user.email === job.employerEmail
              ? "bg-gray-400 hover:bg-gray-400"
              : "bg-blue-500 hover:bg-blue-600"
          } rounded-md`}
        >
          Bid on the Project
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
