import React from "react";

import Navbar from "../components/leftnav/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/blog/home/home";
import Search from "../components/blog/search/search";
import Trending from "../components/blog/trending/trending";
import Create from "../components/blog/create/create";
import BlogContentDetails from "../components/blog/newblog/blogContentDetails";

import "../Routing/routing.css";

const Routing = () => {
  return (
    <div>
      <Router>
        <div className="rightContent">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/blogContentDetails" element={<BlogContentDetails />}>
              <Route path=":userId" element={<BlogContentDetails />} />
            </Route>
            <Route path="/search" element={<Search />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Routing;
