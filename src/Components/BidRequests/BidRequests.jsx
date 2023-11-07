import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const BidRequests = () => {
  const requestsjobs = useLoaderData();
  const { user } = useContext(AuthContext);
  const [bidRequests, setBidRequests] = useState(requestsjobs);
  const navigate = useNavigate();
  if (!user) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  const filterBidRequests = bidRequests.filter(
    (bid) => bid.buyerEmail === user.email
  );
  // const filterBidRequests = bidRequests.filter((request) => {
  //   return request.buyerEmail === user.email || request.status === "pending";
  // });

  console.log(filterBidRequests.length);

  const handleAccept = (id) => {
    // Update the status for the specific bid with the given ID
    const updatedStatus = "in progress";

    fetch(`http://localhost:5000/bidjob/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: updatedStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Bid status updated successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          // refreshBidRequests();
        }
      });
  };

  const handleReject = (id) => {
    // Update the status for the specific bid with the given ID
    const updatedStatus = "rejected";

    fetch(`http://localhost:5000/bidjob/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: updatedStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Bid status updated to 'rejected' successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });

          // After updating the status, you can choose to refresh the list of bid requests or perform any other action.
          // Example: You can call a function to refresh the list of bid requests.
          // refreshBidRequests();
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Bid Requests</h1>
      <table className="w-full border-collapse border border-gray-400 mt-4">
        <thead>
          <tr>
            <th className="border border-gray-400">Job Title</th>
            <th className="border border-gray-400">Email</th>
            <th className="border border-gray-400">Deadline</th>
            <th className="border border-gray-400">Price</th>
            <th className="border border-gray-400">Status</th>
            <th className="border border-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterBidRequests.map((request) => (
            <tr key={request._id}>
              <td className="border border-gray-400">{request.jobTitle}</td>
              <td className="border border-gray-400">{request.email}</td>
              <td className="border border-gray-400">{request.deadline}</td>
              <td className="border border-gray-400">{request.price}</td>
              <td className="border border-gray-400">{request.status}</td>
              <td className="border border-gray-400">
  {request.status === "Pending" && (
    <>
      <button
        onClick={() => handleAccept(request._id)}
        className="bg-green-500 text-white px-2 py-1 rounded"
      >
        Accept
      </button>
      <button
        onClick={() => handleReject(request._id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Reject
      </button>
    </>
  )}
  {request.status === "in progress" && (
    <div className="progress-bar-container">
      <ProgressBar
        percent={75}
        text="75%"
        filledBackground="linear-gradient(to right, #6AD0D0, #22B7B7)"
      ></ProgressBar>
    </div>
  )}
  {request.status === "complete" && (
    <div className="progress-bar-container">
      <ProgressBar
        percent={100}
        text="100%"
        filledBackground="linear-gradient(to right, #00FF00, #009900)"
      ></ProgressBar>
    </div>
  )}
  {request.status === "rejected" && (
    <div className="progress-bar-container">
      <ProgressBar
        percent={0}
        text="0%"
        filledBackground="linear-gradient(to right, #FF0000, #990000)"
      ></ProgressBar>
    </div>
  )}
</td>

            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BidRequests;
