
const MyPostedJob = ({job}) => {
    return (
        
    <div className="bg-gray-200 w-9/12 mt-4 mx-auto p-4 rounded-lg">
      <h1 className="text-2xl font-bold bg-slate-800 py-2 rounded-lg text-center text-white mb-4">
        My Posted Job
      </h1>
      <div className="mb-4">
        <label className="block text-gray-600">Email:</label>
        <input
          type="text"
          value={job.email}
          readOnly
          className="w-full border p-2 rounded-md bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Job Title:</label>
        <input
          type="text"
          value={job.jobTitle}
          readOnly
          className="w-full border p-2 rounded-md bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Deadline:</label>
        <input
          type="text"
          value={job.deadline}
          readOnly
          className="w-full border p-2 rounded-md bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Description:</label>
        <textarea
          value={job.description}
          readOnly
          className="w-full border p-2 rounded-md bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Category:</label>
        <input
          type="text"
          value={job.category}
          readOnly
          className="w-full border p-2 rounded-md bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Minimum Price:</label>
        <input
          type="text"
          value={job.minPrice}
          readOnly
          className="w-full border p-2 rounded-md bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Maximum Price:</label>
        <input
          type="text"
          value={job.maxPrice}
          readOnly
          className="w-full border p-2 rounded-md bg-gray-100"
        />
      </div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="px-5 py-2 rounded-3xl text-lg card-hover mt-4 bg-gradient-to-r from-orange-500 via-rose-300 to-orange-500"
        >
          Update
        </button>
      </div>
    </div>
    );
};

export default MyPostedJob;