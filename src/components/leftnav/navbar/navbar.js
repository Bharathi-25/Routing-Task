import React from "react";
import circle from "../../../assets/images/circle.svg";
import search from "../../../assets/images/search.svg";
import trending from "../../../assets/images/trending_up.svg";
import create from "../../../assets/images/create.svg";
import "../navbar/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="parent">
      <div>
        <ul className="listStyle">
          <li>
            <Link to="/">
              <img src={circle} className="circleImage" alt="circle" />
              <h3 className="circleText">B</h3>
            </Link>
          </li>
          <li className="contentAlignment">
            <Link to="/search">
              <img src={search} className="searchIcon" alt="search" />
              <p>search</p>
            </Link>
          </li>
          <li className="contentAlignment">
            <Link to="/trending">
              <img src={trending} className="trendingIcon" alt="trending" />
              <p>trending</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="create">
        <ul className="listStyle">
          <li style={{ marginBottom: "80px" }} className="contentAlignment">
            <Link to="/create">
              <img src={create} className="createIcon" alt="create" />
              <p>create</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
