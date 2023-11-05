import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabData = () => {
  const jobData = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("Web Development");

  // Filter data based on selected category
  const filteredData = jobData.filter((job) => job.category === selectedCategory);

  return (
    <div className="text-center">
      <h2>{filteredData.length}</h2>
      <Tabs>
        <TabList>
          <Tab onClick={() => setSelectedCategory("Web Development")}>Web Development</Tab>
          <Tab onClick={() => setSelectedCategory("Digital Marketing")}>Digital Marketing</Tab>
          <Tab onClick={() => setSelectedCategory("Graphics Design")}>Graphics Design</Tab>
        </TabList>

        {filteredData.map((job, index) => (
          <TabPanel key={index}>
            <div className="w-72 bg-white rounded-lg shadow-md m-4">
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{job.jobTitle}</h3>
                <p className="text-gray-600 text-sm mb-2">Deadline: {job.deadline}</p>
                <p className="text-gray-600 text-sm mb-2">
                  Price Range: ${job.minPrice} - ${job.maxPrice}
                </p>
                <p className="text-base mb-4">{job.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                  Bid Now
                </button>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabData;
