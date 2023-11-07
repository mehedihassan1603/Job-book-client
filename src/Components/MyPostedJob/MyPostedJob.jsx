import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const MyPostedJob = () => {
  const allJobs = useLoaderData();
  const [jobs, setJobs] = useState(allJobs);
  console.log(jobs);
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  const filterMyJobs = jobs.filter((job) => job.employerEmail === user.email);

  const handleDelete = async (_id) => {
    console.log(_id);
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
          const response = await fetch(`http://localhost:5000/job/${_id}`, {
            method: "DELETE",
          });
  
          if (response.ok) {
            const data = await response.json();
            console.log(data);
  
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = jobs.filter((job) => job._id !== _id);
  
              setJobs(remaining);
            }
          } else {
            // Handle any non-successful response here
            Swal.fire("Error", "Failed to delete the job.", "error");
          }
        } catch (error) {
          console.error("Error deleting job:", error);
          // Handle the error (e.g., show an error message)
          Swal.fire("Error", "An error occurred while deleting the job.", "error");
        }
      }
    });
  };

  useEffect(() => {
    document.title = "Job-Book|Posted Jobs";
    const favicon = document.querySelector("link[rel*='icon']");
    favicon.href = "/public/more.png";
  }, []);
  
  return (
    <div>
      <h1 className="text-2xl font-bold">My Posted Jobs</h1>
      {filterMyJobs.map((job) => (
        <div key={job._id} className="bg-white p-4 my-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{job.jobTitle}</h2>
          <p>Deadline: {job.deadline}</p>
          <p>Category: {job.category}</p>
          <p>Description: {job.description}</p>
          <div className="mt-4">
            <Link to={`/update/${job._id}`}>
              <button className="px-5 py-2 rounded-3xl text-lg card-hover mt-4 bg-gradient-to-r from-rose-500 via-rose-300 to-rose-500">
                Update
              </button>
            </Link>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
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
