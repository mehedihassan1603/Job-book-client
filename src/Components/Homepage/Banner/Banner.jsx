import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full h-4/5">
      <div
        id="slide1"
        className="carousel-item relative w-full h-52 lg:h-[500px]"
        style={{
          backgroundImage: `url("https://www3.recruiter.com/recruiting/wp-content/uploads/2016/10/bulb.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h2>Grow up with your own capability</h2>
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
          backgroundImage: `url("https://images.inc.com/uploaded_files/image/1920x1080/getty_825493738_414275.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="content text-center">
          <h2>Find Your Dream Job</h2>
          <p>You can find your dream job here.</p>
          
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
        <div className="content">
          <h2>Let's Check it Out...</h2>
          
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
