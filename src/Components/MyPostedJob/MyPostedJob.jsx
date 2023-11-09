import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import axios from "axios";

const MyPostedJob = () => {
  const allJobs = useLoaderData();
  const [jobs, setJobs] = useState(allJobs);
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="text-center mt-8">
        <p className="text-2xl font-semibold text-gray-800">
          Loading...
        </p>
      </div>
    );
  }

  const filterMyJobs = jobs.filter((job) => job.employerEmail === user.email);

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`https://job-book-server.vercel.app/job/${_id}`, {
            method: "DELETE",
          });

          if (response.ok) {
            const data = await response.json();

            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your job has been deleted.", "success");
              const remaining = jobs.filter((job) => job._id !== _id);
              setJobs(remaining);
            }
          } else {
            Swal.fire("Error", "Failed to delete the job.", "error");
          }
        } catch (error) {
          console.error("Error deleting job:", error);
          Swal.fire("Error", "An error occurred while deleting the job.", "error");
        }
      }
    });
  };

  useEffect(() => {
    document.title = "Job-Book | Posted Jobs";
  }, []);

  return (
    <div>
      <div className="w-full lg:w-2/4 mx-auto">
        <h1 className="text-3xl text-white font-semibold bg-slate-600 text-center py-4 mt-8 mb-4">
          My Posted Jobs
        </h1>
      </div>
      {filterMyJobs.map((job) => (
        <div key={job._id} className="bg-white p-4 my-4 rounded-lg w-11/12 mx-auto shadow-lg">
          <h2 className="text-2xl text-center font-semibold text-blue-500">Job Title: {job.jobTitle}</h2>
          <p className=" text-center text-gray-600 mt-2">
            Deadline: {job.deadline}
          </p>
          <p className=" text-center text-gray-600">
            Category: {job.category}
          </p>
          <p className="text-sm mt-4 text-gray-600">
            Description: {job.description}
          </p>
          <div className="mt-4 flex justify-between">
            <Link to={`/update/${job._id}`}>
              <button className="px-5 py-2 rounded-lg text-lg bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white hover:bg-rose-600">
                Update
              </button>
            </Link>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => handleDelete(job._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPostedJob;
