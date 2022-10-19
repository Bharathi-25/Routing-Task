import React, { useState, useEffect } from "react";
import Newblog from "../components/blog/newblog/newblog";
import Data from "../resources/content";
import { v1 as uuid } from "uuid";

const Blogdata = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("formData"));
    if (obj === null) {
      setBlogs(Data);
      localStorage.setItem("formData", JSON.stringify(Data));
    } else {
      setBlogs(obj);
    }
  }, []);

  return (
    <div>
      {blogs &&
        blogs.map((obj) => {
          return (
            <Newblog
              key={uuid()}
              id={uuid()}
              email={obj.email}
              topic={obj.topic}
              date={obj.date}
              description={obj.description}
              relatedTopic1={obj.relatedTopic1}
              relatedTopic2={obj.relatedTopic2}
            />
          );
        })}
    </div>
  );
};

export default Blogdata;
