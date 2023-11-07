import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyBids = () => {
  const bidJob = useLoaderData();
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState(bidJob);

  const handleCompleteBid = (bidId) => {
    // Find the bid with the given bidId and mark it as complete
    const updatedStatus = "complete";
  
    fetch(`http://localhost:5000/bidjob/${bidId}`, {
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
          toast.success("Bid status updated to 'completed' successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
  
          // After updating the status, you can choose to refresh the list of bid requests or perform any other action.
          // Example: You can call a function to refresh the list of bid requests.
          // refreshBidRequests();
        }
      });
  };

  if (!user) {
    return (
      <div>
        <h1 className="text-2xl font-bold">My Bids</h1>
        <p>Loading...</p>
      </div>
    );
  }

  const filteredBidJob = bids.filter((bid) => bid.email === user.email);

  return (
    <div>
      <h1 className="text-2xl font-bold">My Bids</h1>
      <table className="w-full border-collapse border border-gray-400 mt-4">
        <thead>
          <tr>
            <th className="border border-gray-400">Job Title</th>
            <th className="border border-gray-400">Email</th>
            <th className="border border-gray-400">Deadline</th>
            <th className="border border-gray-400">Status</th>
            <th className="border border-gray-400">Complete</th>
          </tr>
        </thead>
        <tbody>
          {filteredBidJob.map((job) => (
            <tr key={job._id}>
              <td className="border border-gray-400">{job.jobTitle}</td>
              <td className="border border-gray-400">{job.buyerEmail}</td>
              <td className="border border-gray-400">{job.deadline}</td>
              <td className="border border-gray-400">{job.status}</td>
              <td className="border border-gray-400">
                {job.status === "in progress" && (
                  <button
                    onClick={() => handleCompleteBid(job._id)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Complete
                  </button>
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

export default MyBids;
