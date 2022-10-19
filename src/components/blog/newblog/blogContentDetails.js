import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Newblog from "./newblog";

const BlogContentDetails = () => {
  console.log(useLocation());

  const { state } = useLocation();
  const navigate = useNavigate();

  if (state === null) {
    navigate("/");
  }

  return (
    <div>
      {
        <Newblog
          id={state.id}
          email={state.email}
          topic={state.topic}
          date={state.date}
          description={state.description}
          relatedTopic1={state.relatedTopic1}
          relatedTopic2={state.relatedTopic2}
          fullBlog={true}
        />
      }
    </div>
  );
};

export default BlogContentDetails;
