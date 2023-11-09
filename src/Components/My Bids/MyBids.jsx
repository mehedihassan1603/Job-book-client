import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../AuthProvider/useAxiosSecure";
import { InfinitySpin } from "react-loader-spinner";

const MyBids = () => {
  const bidJob = useLoaderData();
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(true);

  const url = `/bidjob?email=${user?.email}`;

  useEffect(() => {
    axiosSecure
      .get(url)
      .then((res) => {
        setBids(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [url, axiosSecure]);

  const handleCompleteBid = (bidId) => {
    const updatedStatus = "complete";

    fetch(`https://job-book-server.vercel.app/bidjob/${bidId}`, {
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
        }
      });
  };

  if (!user) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">My Bids</h1>
        {isLoading ? (
          <div className="mt-8">
            <InfinitySpin width="48" color="#4fa94d" />
          </div>
        ) : null}
      </div>
    );
  }

  const filteredBidJob = bids?.filter((bid) => bid.email === user?.email);

  const [sortBy, setSortBy] = useState("status");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedBidJob = filteredBidJob.slice().sort((a, b) => {
    if (sortBy === "status") {
      return a.status < b.status ? -1 : 1;
    } else if (sortBy === "deadline") {
      return new Date(a.deadline) - new Date(b.deadline);
    }
  });

  useEffect(() => {
    document.title = "Job-Book | My Bids";
    const favicon = document.querySelector("link[rel*='icon']");
    favicon.href = "/public/icons8-favicon-48.png";
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-2xl md:text-3xl font-bold mt-4">My Bids</h1>
      {isLoading ? (
        <div className="mt-8">
          <InfinitySpin width="48" color="#4fa94d" />
        </div>
      ) : (
        <div className="mt-4">
          <div className="w-2/3 md:w-1/3 lg:w-1/3 m-auto">
            <div className="flex justify-end mt-2 mb-4">
              <div className="w-2/3 md:w-1/3 lg:w-1/3 mr-3 flex justify-end items-center">
                <label className="block text-right text-lg font-medium text-gray-600">
                  Sort by:
                </label>
              </div>
              <div className="w-2/3">
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="block w-full px-4 py-2 mt-1 bg-gray-200 border border-gray-400 focus:ring focus:ring-blue-500 focus:border-blue-500 rounded-md sm:text-sm"
                >
                  <option value="status">Status</option>
                  <option value="deadline">Deadline</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full mt-4 border border-gray-400">
              <thead>
                <tr>
                  <th className="p-4">Job Title</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Deadline</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Complete</th>
                </tr>
              </thead>
              <tbody>
                {sortedBidJob.map((job) => (
                  <tr key={job._id}>
                    <td className="p-4">{job.jobTitle}</td>
                    <td className="p-4">{job.buyerEmail}</td>
                    <td className="p-4">{job.deadline}</td>
                    <td className="p-4">{job.status}</td>
                    <td className="p-4">
                      {job.status === "in progress" && (
                        <button
                          onClick={() => handleCompleteBid(job._id)}
                          className="px-2 py-1 text-white bg-green-500 rounded"
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
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default MyBids;
