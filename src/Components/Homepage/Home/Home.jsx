import Banner from "../Banner/Banner";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Chat from "../Chat/Chat";
import "./Home.css";
import Welcome from "../Wlcome/Welcome";
import GetAhead from "./GetAhead";

const Home = () => {
  const jobData = useLoaderData();
  const categories = [
    "Web Development",
    "Digital Marketing",
    "Graphics Design",
  ];
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
      <Welcome></Welcome>
      <div className="text-center bg-gray-300 w-11/12 mx-auto">
        <Tabs>
          <TabList className="flex flex-col md:flex-row lg:flex-row justify-center bg-slate-600 space-x-4 p-4">
            {categories.map((category) => (
              <Tab
                key={category}
                onClick={() => setSelectedCategory(category)}
                selected={category === selectedCategory}
                className="cursor-pointer text-lg border-2 bg-slate-400 border-white text-white font-bold rounded hover:bg-blue-100"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{
                    scale: 0.9,
                    borderColor: "white",
                  }}
                  style={{
                    backgroundColor:
                      category === selectedCategory
                        ? "rgb(219 234 254)"
                        : "initial",
                    color: category === selectedCategory ? "Black" : "initial",
                    borderRadius:
                      category === selectedCategory ? "10px" : "initial",
                  }}
                >
                  {category}
                </motion.button>
              </Tab>
            ))}
          </TabList>

          {categories.map((category) => (
            <TabPanel key={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-40 p-4">
                {groupedData[category].map((job, index) => (
                  <div
                    className="bg-slate-600 rounded-lg shadow-md text-white"
                    key={index}
                  >
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {job.jobTitle}
                      </h3>
                      <p className="text-white text-sm mb-2">
                        Published on: {job.postedOn}{" "}
                        {/* Added Published on date */}
                      </p>
                      <p className="text-white text-sm mb-2">
                        Deadline: {job.deadline}
                      </p>
                      <p className="text-white text-sm mb-2">
                        Price Range: ${job.minPrice} - ${job.maxPrice}
                      </p>
                      <p className="text-base mb-2">
                        {job.description.split(" ").slice(0, 20).join(" ")}
                      </p>
                      <Link to={`/details/${job._id}`}>
                        <button className="text-lg card-hover mt-4 bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                              backgroundColor: "teal",
                            }}
                          >
                            Bid Now
                          </motion.button>
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


      <div className="flex flex-col md:flex-row lg:flex-row justify-around my-10 gap-10 items-center w-9/12 mx-auto text-black bg-blue-200 p-6">
        <div className="" data-aos="slide-right">
          <img src="https://doortofuture.com/wp-content/uploads/2021/11/online-jobs-from-home-without-investment1.jpg" alt="" />
        </div>
        <div className="w-3/4 mx-auto" data-aos="slide-up">
          <h1 className="text-3xl font-semibold">Online jobs for students can be lucrative, pay well, and set you on a successful career path… if you choose them well & you’re willing to do the work.</h1>
        </div>
      </div>


      <GetAhead></GetAhead>

      <div className="flex flex-col md:flex-col lg:flex-row-reverse justify-center items-center px-20 gap-10 py-10 bg-slate-800">
        <div className="hero bg-sky-200 rounded-lg shadow-lg card-hover">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/h2mWnCC/delivery-man.png"
              className="max-w-sm rounded-lg shadow-2xl"
              width={"200px"}
            />
            <div className="">
              <Chat></Chat>
            </div>
          </div>
        </div>
        <div className="hero bg-sky-200 rounded-lg shadow-lg card-hover">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/GCWjmym/24-hours-support.png"
              className="max-w-sm rounded-lg shadow-2xl"
              width={"200px"}
            />
            <div>
              <h1 className="text-5xl font-bold">24/7 Support</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
