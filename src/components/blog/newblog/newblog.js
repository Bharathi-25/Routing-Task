import React from "react";
import "./newblog.css";
import { Link } from "react-router-dom";

const Newblog = (props) => {
  const currentBlogs = {
    id: props.id,
    topic: props.topic,
    date: props.date,
    email: props.email,
    description: props.description,
    relatedTopic1: props.relatedTopic1,
    relatedTopic2: props.relatedTopic2,
  };

  return (
    <>
      {props.fullBlog ? (
        <div className="fullblog-mainContainer">
          <div>
            <h2 className="headerDisplay">{props.topic}</h2>
            <h4 className="fullblog-email">written by {
              props.email[0] === "@" ?
              props.email :
              `@${props.email.substring(0, props.email.indexOf("@"))}`
            }</h4>
            <h4 className="fullblog-date">on {props.date} 2022</h4>
          </div>
          <div>
            <div>
              <p className="descriptionDisplay">
                <>
                  <span className="font-display">
                    {props.description.substring(0, 1).toUpperCase()}
                  </span>
                  <span>{props.description.substring(1)}</span>
                </>
              </p>
            </div>
            <div className="fullblog-button">
              <button className="relatedTopicDisplay">
                <h4 className="buttonDisplay">{props.relatedTopic1}</h4>
              </button>
              <button className="relatedTopicDisplay">
                <h4 className="buttonDisplay">{props.relatedTopic2}</h4>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mainContainer">
          <div className="left-maincontent">
            <h3 className="dateDisplay">{props.date}</h3>
            <h4 className="emailDisplay"> 
            {
              props.email[0] === "@" ?
              props.email :
              `@${props.email.substring(0, props.email.indexOf("@"))}`
            }
            
            </h4>
          </div>
          <div>
            <div>
              <h2 className="headerDisplay">{props.topic}</h2>
              <p className="descriptionDisplay">
                {props.description.slice(0, 300)}
                <Link
                  to={{ pathname: `/blogContentDetails/${props.id}` }}
                  state={currentBlogs}
                >
                  <span className="headerDisplay">...read more</span>
                </Link>
              </p>
            </div>
            <div>
              <button className="relatedTopicDisplay">
                <h4 className="buttonDisplay">{props.relatedTopic1}</h4>
              </button>
              <button className="relatedTopicDisplay">
                <h4 className="buttonDisplay">{props.relatedTopic2}</h4>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Newblog;
