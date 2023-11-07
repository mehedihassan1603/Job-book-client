import Banner from "../Banner/Banner";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Home = () => {
  const jobData = useLoaderData();
  const categories = ["Web Development", "Digital Marketing", "Graphics Design"];
  const [selectedCategory, setSelectedCategory] = useState("Web Development");

  const groupedData = {};
  categories.forEach((category) => {
    groupedData[category] = jobData.filter((job) => job.category === category);
  });

  useEffect(() => {
    document.title = "Job-Book|Home";
    const favicon = document.querySelector("link[rel*='icon']");
    favicon.href = "/public/logo-removebg-preview.png";
  }, []);
  return (
    <div>
      <Banner />
      <div className="text-center w-10/12 mx-auto">
        <Tabs>
          <TabList className="flex justify-center space-x-4 p-4">
            {categories.map((category) => (
              <Tab
                key={category}
                onClick={() => setSelectedCategory(category)}
                selected={category === selectedCategory}
                className="cursor-pointer px-4 py-2 text-blue-500 rounded hover:bg-blue-100"
              >
                {category}
              </Tab>
            ))}
          </TabList>

          {categories.map((category) => (
            <TabPanel key={category}>
              <div className="grid grid-cols-2 gap-4 p-4">
                {groupedData[category].map((job, index) => (
                  <div
                    className="bg-white rounded-lg shadow-md"
                    key={index}
                  >
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{job.jobTitle}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Published on: {job.postedOn} {/* Added Published on date */}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        Deadline: {job.deadline}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        Price Range: ${job.minPrice} - ${job.maxPrice}
                      </p>
                      <p className="text-base mb-2">
                        {job.description}
                      </p>
                      <p className="text-base mb-2">
                        Job Nature: {job.jobNature}
                      </p>
                      <Link to={`/details/${job._id}`}>
                      <button className="px-5 py-2 rounded-3xl text-lg card-hover mt-4 bg-gradient-to-r from-teal-500 via-teal-300 to-teal-500">
                        Bid Now
                      </button>
                    </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
