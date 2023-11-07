import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="mr-20 mb-5">
      <img
        src="https://i.ibb.co/nb2VQkP/404-error-page-not-found.gif"
        alt="404 Not Found"
        className="not-found-image"
      />
      </div>
      <div>
      <Link to="/" className="back-to-home-button">
        Back to Home
      </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
