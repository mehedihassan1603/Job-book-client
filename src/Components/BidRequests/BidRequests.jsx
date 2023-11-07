import React, { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BidRequests = () => {
  const requestsjobs = useLoaderData();
  const {user} = useContext(AuthContext);
  const [bidRequests, setBidRequests] = useState(requestsjobs);
  if (!user) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  const filterBidRequests = bidRequests.filter(bid => bid.buyerEmail === user.email);
  console.log(filterBidRequests.length)

  const handleAccept = (id) => {
    // Find the bid request with the given id and update its status to "in progress"
    const updatedRequests = bidRequests.map((request) => {
      if (request.id === id) {
        return { ...request, status: "in progress" };
      }
      return request;
    });

    setBidRequests(updatedRequests);
  };

  const handleReject = (id) => {
    // Find the bid request with the given id and update its status to "rejected"
    const updatedRequests = bidRequests.map((request) => {
      if (request.id === id) {
        return { ...request, status: "rejected" };
      }
      return request;
    });

    setBidRequests(updatedRequests);
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
            <tr key={request.id}>
              <td className="border border-gray-400">{request.jobTitle}</td>
              <td className="border border-gray-400">{request.email}</td>
              <td className="border border-gray-400">{request.deadline}</td>
              <td className="border border-gray-400">{request.price}</td>
              <td className="border border-gray-400">{request.status}</td>
              <td className="border border-gray-400">
                {request.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleAccept(request.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(request.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Reject
                    </button>
                  </>
                )}
                {request.status === "in progress" && (
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "50%" }} // You can adjust the width based on the job's progress
                    />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidRequests;
