import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyBids = () => {
  const bidJob = useLoaderData();
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState(bidJob);

  const handleCompleteBid = (bidId) => {
    // Find the bid with the given bidId and mark it as complete
    const updatedBids = bids.map((bid) => {
      if (bid._id === bidId) {
        return { ...bid, status: "complete" };
      }
      return bid;
    });

    setBids(updatedBids);
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
    </div>
  );
};

export default MyBids;
