import React from "react";
import "./rightbar.css";
import { MdDisplaySettings, MdOutlineCastForEducation } from "react-icons/md";
const Rightbar = () => {
  return (
    <div className="container    sticky top-0">
      <div className="item">
        <div className="bgContainer">
          <img src="/astronaut.png" alt="User Avatar" className="bg" />
        </div>
        <div className="texts">
          <span className="notification">🔥 Available Now</span>
          <h3 className="title">
            How to use the new version of the admin dashboard
          </h3>
          <span className="subtitle">Takes 4 minutes to learn</span>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            accusantium magni fuga eligendi a velit, unde beatae, mollitia nisi
            autem incidunt perferendis animi similique, ea numquam facilis
            soluta id non!
          </p>
          <button className="button">
            <MdDisplaySettings />
            Watch Now
          </button>
        </div>
      </div>
      <div className="item">
        <div className="texts">
          <span className="notification">🚀 Coming Soon</span>
          <h3 className="title">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="subtitle">Boost your productivity</span>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            accusantium magni fuga eligendi a velit, unde beatae, mollitia nisi
            autem incidunt perferendis animi similique, ea numquam facilis
            soluta id non!
          </p>
          <button className="button">
            <MdOutlineCastForEducation />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
