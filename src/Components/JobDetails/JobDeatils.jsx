import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const details = useLoaderData();
  const { _id } = useParams();
  const job = details.find((item) => item._id === _id);

  const [bid, setBid] = useState({
    price: 0,
    deadline: job.deadline,
    email: user ? user.email : "",
    buyerEmail: job.employerEmail,
  });

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const handleBidSubmit = (e) => {
    e.preventDefault();
    // Handle bid submission here
    console.log(bid);
    
    // You can make an API request to post the bid data here
    // Example code for posting the bid data
    // addToBids();
  };

  const addToBids = async () => {
    const itemToAdd = {
      // Add here all the form data needed for the bid
      price: bid.price,
      deadline: bid.deadline,
      email: bid.email,
      buyerEmail: bid.buyerEmail,
      jobId: job._id, // Add the job ID to link the bid to the job
    };

    fetch('http://localhost:5000/bidjob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemToAdd),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Successfully added to My Cart!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{job.jobTitle}</h1>
      <p>Deadline: {formatDate(job.deadline)}</p>
      <p>Price Range: ${job.minPrice} - ${job.maxPrice}</p>
      <p>Description: {job.description}</p>

      <h2>Place Your Bid</h2>
      <form onSubmit={handleBidSubmit}>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={bid.price}
            onChange={(e) => setBid({ ...bid, price: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={job.deadline}
            readOnly
            onChange={(e) => setBid({ ...bid, deadline: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Email (Your Email):</label>
          <input type="text" id="email" name="email" value={bid.email} readOnly />
        </div>
        <div>
          <label>Buyer Email:</label>
          <input
            type="text"
            id="buyerEmail"
            name="buyerEmail"
            value={bid.buyerEmail}
            readOnly
          />
        </div>
        <button type="submit" onClick={addToBids} disabled={user && user.email === job.employerEmail}>
          Bid on the Project
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
