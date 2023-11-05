import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabData = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
          <div className="w-72 bg-white rounded-lg shadow-md m-4">
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">Job Title</h3>
              <p className="text-gray-600 text-sm mb-2">
                Deadline: May 31, 2023
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Price Range: $500 - $800
              </p>
              <p className="text-base mb-4">
                Short description of the job goes here. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                Bid Now
              </button>
            </div>
            <div className="bg-gray-100 p-4">
              <p className="text-gray-600 text-sm mb-2">
                Additional Field 1: Value 1
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Additional Field 2: Value 2
              </p>
            </div>
          </div>
        </TabPanel>







        
        <TabPanel>
          <h2>
            <div className="w-72 bg-white rounded-lg shadow-md m-4">
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">Job Title</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Deadline: May 31, 2023
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Price Range: $500 - $800
                </p>
                <p className="text-base mb-4">
                  Short description of the job goes here. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                  Bid Now
                </button>
              </div>
              <div className="bg-gray-100 p-4">
                <p className="text-gray-600 text-sm mb-2">
                  Additional Field 1: Value 1
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Additional Field 2: Value 2
                </p>
              </div>
            </div>
          </h2>
        </TabPanel>






        <TabPanel>
          <div className="w-72 bg-white rounded-lg shadow-md m-4">
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">Job Title</h3>
              <p className="text-gray-600 text-sm mb-2">
                Deadline: May 31, 2023
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Price Range: $500 - $800
              </p>
              <p className="text-base mb-4">
                Short description of the job goes here. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                Bid Now
              </button>
            </div>
            <div className="bg-gray-100 p-4">
              <p className="text-gray-600 text-sm mb-2">
                Additional Field 1: Value 1
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Additional Field 2: Value 2
              </p>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabData;
