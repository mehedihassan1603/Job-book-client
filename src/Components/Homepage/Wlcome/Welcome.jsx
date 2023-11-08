import React from "react";
import "./Welcome.css"; // Import your custom styles

const Welcome = () => {
  return (
    <div className="welcome-container bg-gray-300 w-11/12 mx-auto">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to Job-Book</h1>
        <p className="welcome-description">
          Where Connections Begin!
        </p>
        <p className="welcome-text">
          Discover a world of opportunities as you step into our online community. <br /> Whether you're here to find your dream job, hire talented professionals, <br /> or connect with like-minded individuals, you're in the right place.
        </p>
        <p className="welcome-text">
          Our platform is designed to empower you, facilitate meaningful connections, <br /> and help you achieve your goals. Join us in making opportunities happen, <br /> one chat, one bid, and one job at a time.
        </p>
        <p className="welcome-text">
          Let's embark on this exciting journey together! Start exploring, start connecting, and start achieving today.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
