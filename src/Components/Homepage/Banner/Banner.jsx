import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full h-4/5">
      <div
        id="slide1"
        className="carousel-item relative w-full h-52 lg:h-[500px]"
        style={{
          backgroundImage: `url("https://images.inc.com/uploaded_files/image/1920x1080/getty_825493738_414275.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="content w-2/3 md:w-full">
          <h2 className="text-lg md:text-4xl">Grow up with your own capability</h2>
          <button className="btn-sm rounded-md md:btn bg-rose-500 md:bg-rose-500 text-white md:text-white mt-6 hover:bg-rose-600">Lets Gets Started...</button>
        </div>
        <div className="content2 rounded-3xl">
          
          </div>
        <div className=" arrow-btn">
          
            <a href="#slide3" className="btn btn-circle hover:bg-gray-600">
              ❮
            </a>
          
          
            <a href="#slide2" className="btn btn-circle hover:bg-gray-600">
              ❯
            </a>
          
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full h-52 lg:h-[500px] "
        style={{
          backgroundImage: `url("https://www3.recruiter.com/recruiting/wp-content/uploads/2016/10/bulb.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="content text-center w-2/4 md:w-full">
          <h2 className="text-lg md:text-4xl">Find Your Dream Job</h2>
          <h2 className="mt-4 text-base md:text-xl">You can find your dream job <span className=" rounded-md px-3  bg-green-500 md:bg-green-500 text-white md:text-white hover:bg-rose-600 cursor-pointer"> Here</span></h2>
        </div>
        <div className="content2 rounded-3xl">
          <img className="rounded-3xl" src="https://c0.wallpaperflare.com/preview/652/889/262/job-dream-man-seeker.jpg" alt="" />
        </div>
        <div className=" arrow-btn">
          
            <a href="#slide1" className="btn btn-circle hover:bg-gray-600">
              ❮
            </a>
          
          
            <a href="#slide3" className="btn btn-circle hover:bg-gray-600">
              ❯
            </a>
          
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full h-52 lg:h-[500px]"
        style={{
          backgroundImage: `url("https://www.cheggindia.com/wp-content/uploads/2021/02/Online-Part-Time-Jobs-in-India-Work-from-Home.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="content text-center w-2/4 md:w-full">
          <h2 className="text-lg md:text-4xl">Focus your goals.</h2>
          <h2 className="mt-4 text-base md:text-xl">Follow the <span className=" rounded-md px-3  bg-green-500 md:bg-green-500 text-white md:text-white hover:bg-rose-600 cursor-pointer"> next</span></h2>
        </div>
        <div className="content2 rounded-3xl">
          <img className="rounded-3xl" src="https://c0.wallpaperflare.com/preview/652/889/262/job-dream-man-seeker.jpg" alt="" />
        </div>
        <div className=" arrow-btn">
          
            <a href="#slide2" className="btn btn-circle hover:bg-gray-600">
              ❮
            </a>
          
          
            <a href="#slide1" className="btn btn-circle hover:bg-gray-600">
              ❯
            </a>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
