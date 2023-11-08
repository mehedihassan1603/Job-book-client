import React from "react";

const ServicesComponent = () => {
  return (
    <div className="w-11/12 mx-auto bg-white p-4">
      <h1 className="text-center text-3xl font-semibold py-5 text-white bg-slate-800 rounded-lg">
        Features and Services
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="flex flex-col items-start mb-6 mt-10">
          <div className="flex items-center pb-1">
            <img
              src="https://i.ibb.co/S3XqmxJ/compliance.png"
              alt="Job Category Icon"
              width="24"
              height="24"
              className="mr-2"
            />
            <div className="text-lg font-semibold">
              <h2>Job Categories</h2>
            </div>
          </div>
          <p className="ml-8 mb-4">
            Offer a wide range of job categories including Web Development,
            Graphic Design, and Digital Marketing. Users can post jobs in their
            preferred category.
          </p>
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/b7TCCc2/engineering.png"
              alt="Bid on Jobs Icon"
              width="24"
              height="24"
              className="mr-2"
            />
            <h2 className="text-lg font-semibold">Bid on Jobs</h2>
          </div>
          <p className="ml-8 mb-4">
            Allow users to bid on jobs that match their skills and interests.
            Job owners can accept or reject bids from interested candidates.
          </p>
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/CbGTnKZ/finance.png"
              alt="Financial Tools Icon"
              width="24"
              height="24"
              className="mr-2"
            />
            <h2 className="text-lg font-semibold">Financial Tools</h2>
          </div>
          <p className="ml-8 mb-4">
            Provide tools to help users estimate the cost of services. Offer
            calculators to help users understand the financial aspects of job
            bidding and hiring.
          </p>
        </div>

        <div className="mx-8">
          <img
            src="https://smartblogger.com/wp-content/uploads/2020/09/online-jobs.jpg"
            alt="Website Features"
            width="1444"
          />
        </div>

        <div className="flex flex-col mt-10 lg:mt-0 items-start lg:items-end">
          <div className="flex flex-col text-right items-end">
            <div className="flex text-right">
              <h2 className="text-lg font-semibold">User Ratings</h2>
              <img
                src="https://i.ibb.co/gVhKdC4/customer-review.png"
                alt="User Ratings Icon"
                width="24"
                height="24"
                className="ml-2"
              />
            </div>
            <p className="mr-8 mb-4">
              Allow users to provide ratings and reviews for job candidates and
              job owners. Enhance trust and credibility within your job market
              community.
            </p>
          </div>
          <div className="flex flex-col text-right items-end">
            <div className="flex text-right">
              <h2 className="text-lg font-semibold">Job Insights and News</h2>
              <img
                src="https://i.ibb.co/McqdSz3/article.png"
                alt="Job Insights Icon"
                width="24"
                height="24"
                className="ml-2"
              />
            </div>
            <p className="mr-8 mb-4">
              Keep users informed with the latest industry trends, job market
              insights, and news. Provide a blog section with articles about job
              hunting tips and industry updates.
            </p>
          </div>
          <div className="flex flex-col text-right items-end">
            <div className="flex text-right">
              <h2 className="text-lg font-semibold">Customer Support</h2>
              <img
                src="https://i.ibb.co/RNVZtCQ/support.png"
                alt="Customer Support Icon"
                width="24"
                height="24"
                className="ml-2"
              />
            </div>
            <p className="mr-8 mb-4">
              Offer accessible customer support through chat, email, or a
              helpline. Ensure users can easily reach out for assistance or
              inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
