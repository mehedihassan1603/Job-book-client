import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [job, setJob] = useState({
    employerEmail: user ? user.email : "",
    jobTitle: "",
    deadline: "",
    description: "",
    category: "Select Category",
    jobNature: "Select One",
    minPrice: 0,
    maxPrice: 0,
    postedOn: "", // Add the "Published on" date field
  });

  const categories = [
    "Web Development",
    "Digital Marketing",
    "Graphics Design",
  ];
  const jobNatures = ["Full Time", "Part Time"];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the current date and time
    const currentDate = new Date();

    // Convert the date to a formatted string (you can customize the format)
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);

    // Set the "Published on" date in the job data
    const updatedJobData = { ...job, postedOn: formattedDate };

    fetch("http://localhost:5000/job", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedJobData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Add Job successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate(`/`);
          }, 2000);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  return (
    <div className="bg-gray-200 w-9/12 mt-10 mx-auto p-6 rounded-lg">
      <h1 className="text-2xl font-bold bg-slate-800 py-2 rounded-lg text-center text-white mb-4">
        Add Job
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="employerEmail" className="block text-gray-600">
            Employer Email (Read-Only):
          </label>
          <input
            type="text"
            id="employerEmail"
            name="employerEmail"
            value={user ? user.email : ""}
            readOnly
            className="w-full border p-2 rounded-md bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-gray-600">
            Job Title:
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-gray-600">
            Deadline:
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600">
            Job Description:
          </label>
          <textarea
            id="description"
            name="description"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-600">
            Category:
          </label>
          <select
            id="category"
            name="category"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          >
            <option value="Select Category">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="jobNature" className="block text-gray-600">
            Job Nature:
          </label>
          <select
            id="jobNature"
            name="jobNature"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          >
            {jobNatures.map((jobNature) => (
              <option key={jobNature} value={jobNature}>
                {jobNature}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="minPrice" className="block text-gray-600">
            Minimum Price:
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="in Taka only"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="maxPrice" className="block text-gray-600">
            Maximum Price:
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="in Taka only"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="px-5 py-2 rounded-3xl text-lg card-hover mt-4 bg-gradient-to-r from-teal-500 via-sky-300 to-teal-500"
          >
            ADD JOB
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddJob;
