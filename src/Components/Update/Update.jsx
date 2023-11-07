import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Update = () => {
  const loadedProduct = useLoaderData();
  const navigate = useNavigate();
  const { _id, jobTitle, employerEmail, deadline, description, minPrice, maxPrice, category } =
    loadedProduct;

    const categories = [
        "Web Development",
        "Digital Marketing",
        "Graphics Design",
      ];



  const handleSubmit = (e) => {
    e.preventDefault();
    const jobTitle = e.target.jobTitle.value;
    const employerEmail = e.target.employerEmail.value;
    const deadline = e.target.deadline.value;
    const minPrice = e.target.minPrice.value;
    const maxPrice = e.target.maxPrice.value;
    const description = e.target.description.value;
    const category = e.target.category.value;

    const updateProduct = {
        jobTitle, 
        deadline, 
        category, 
        minPrice, 
        maxPrice, 
        description
    };
    console.log(updateProduct);

    fetch(`http://localhost:5000/job/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Product Update successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate(`/`);
          }, 2000);
        }
      });
  };

  useEffect(() => {
    document.title = "Job-Book|Update";
    const favicon = document.querySelector("link[rel*='icon']");
    favicon.href = "/public/update.png";
  }, []);
  return (
    <div className="bg-gray-200 w-9/12 mt-10 mx-auto p-6 rounded-lg">
      <h1 className="text-2xl font-bold bg-slate-800 py-2 rounded-lg text-center text-white mb-4">Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="employerEmail" className="block text-gray-600">
            Employer Email (Read-Only):
          </label>
          <input
            type="text"
            id="employerEmail"
            name="employerEmail"
            defaultValue={employerEmail}
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
            defaultValue={jobTitle}
            required
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
            defaultValue={deadline}
            required
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
            defaultValue={description}
            required
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
            defaultValue={category}
            required
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
          <label htmlFor="minPrice" className="block text-gray-600">
            Minimum Price:
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="in Taka only"
            defaultValue={minPrice}
            required
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
            defaultValue={maxPrice}
            required
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Update;
