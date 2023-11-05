import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full h-4/5">
      <div
        id="slide1"
        className="carousel-item relative w-full h-52 lg:h-[500px]"
        style={{
          backgroundImage: `url("https://i.ibb.co/GFJrtf0/Car-For-Sale-Promo-Cover-Template-Made-with-Poster-My-Wall333.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h2>Title 1</h2>
          <p>Short paragraph</p>
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
          backgroundImage: `url("https://i.ibb.co/DQPg2LS/Luxury-Car-Rental-Made-with-Poster-My-Wall333.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h2>Title 2</h2>
          <p>Another short paragraph</p>
          
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
          backgroundImage: `url("https://i.ibb.co/LYzzMLx/Sell-your-cars.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h2>Title 3</h2>
          <p>One more short paragraph</p>
          
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
