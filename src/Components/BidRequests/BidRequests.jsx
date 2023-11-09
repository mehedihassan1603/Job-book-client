import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../AuthProvider/useAxiosSecure";
import { InfinitySpin } from "react-loader-spinner";

const BidRequests = () => {
  const requestsjobs = useLoaderData();
  const { user } = useContext(AuthContext);
  const [bidRequests, setBidRequests] = useState([]);
  // const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);

  const url = `/bidjob?email=${user?.email}`;
  useEffect(() => {
    // fetch(url, { credentials: 'include' })
    //     .then(res => res.json())
    //     .then(data => setBids(data))

    axiosSecure.get(url).then((res) => {
      setBidRequests(res.data);
      setLoading(false);
    });
  }, [url, axiosSecure]);

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

  console.log(filterBidRequests.length);

  const handleAccept = (id) => {
    // Update the status for the specific bid with the given ID
    const updatedStatus = "in progress";

    fetch(`https://job-book-server.vercel.app/bidjob/${id}`, {
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

    fetch(`https://job-book-server.vercel.app/bidjob/${id}`, {
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
  useEffect(() => {
    document.title = "Job-Book | Bid Requests";
    const favicon = document.querySelector("link[rel*='icon']");
    favicon.href =
      "/public/360_F_437336235_GQgGcRGWJkzl4edOLW3vUnVlbpvSIdsP.jpg";
  }, []);

  return (
    <div>
      <h1 className="text-2xl mt-5 font-bold text-center w-2/4 mx-auto text-white py-3 bg-slate-600">Bid Requests</h1>
      {loading ? (
        <InfinitySpin width="500" color="#4fa94d" />
      ) : (
        <div className="overflow-x-auto">
        <table className="w-full mt-4 border border-gray-400">
          <thead>
            <tr>
              <th className="p-4 md:p-4">Job Title</th>
              <th className="p-4 md:p-4">Email</th>
              <th className="p-4 md:p-4">Deadline</th>
              <th className="p-4 md:p-4">Price</th>
              <th className="p-4 md:p-4">Status</th>
              <th className="p-4 md:p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterBidRequests.map((request) => (
              <tr key={request._id}>
                <td className="p-4 md:p-4">{request.jobTitle}</td>
                <td className="p-4 md:p-4">{request.email}</td>
                <td className="p-4 md:p-4">{request.deadline}</td>
                <td className="p-4 md:p-4">{request.price}</td>
                <td className="p-4 md:p-4">{request.status}</td>
                <td className="p-4 md:p-4">
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
                        filledBackground="linear-gradient(to right, #B5B7B7, #B5B7B7)"
                      ></ProgressBar>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BidRequests;
