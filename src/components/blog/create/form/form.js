import React from "react";
import "./form.css";
import UseForm from "../../../../hooks/useForm";
import Data from "../../../../resources/content";

const formdata = Data;

const Form = () => {
  const handleSubmit = () => {
    const obj = JSON.parse(localStorage.getItem("formData"));
    if (obj === null) {
      formdata.push(values);
      localStorage.setItem("formData", JSON.stringify(formdata));
    } else {
      obj.push(values);
      localStorage.setItem("formData", JSON.stringify(obj));
    }
  };

  const { values, errors, changeHandler, changeSubmit } = UseForm(handleSubmit);

  return (
    <div className="container">
      <h3>Blog Details Form</h3>
      <form onSubmit={changeSubmit}>
        <div className="form-control">
          <label>Blog Topic</label>
          <input
            type="text"
            name="topic"
            placeholder="Enter the Blog Topic"
            onChange={changeHandler}
          />
          {errors.topic && <h4>Topic should contain atleast 10 characters</h4>}
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter the Email Address"
            onChange={changeHandler}
          />
          {errors.email && <h4>Enter the valid Email Address</h4>}
        </div>
        <div className="form-control">
          <label>Date</label>
          <input type="text" name="date" onChange={changeHandler} />
          {errors.date && <h4>Enter the Valid Date</h4>}
        </div>
        <div className="form-control">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter the Description"
            onChange={changeHandler}
          />
          {errors.description && (
            <h4>Description should contain atleast 10 characters</h4>
          )}
        </div>
        <div className="form-control">
          <label>Related Topic 1</label>
          <input
            type="text"
            name="relatedTopic1"
            placeholder="Enter the Related Topic 1"
            onChange={changeHandler}
          />
          {errors.relatedTopic1 && (
            <h4>The related topic 1 should have atleast 5 characters</h4>
          )}
        </div>
        <div className="form-control">
          <label>Related Topic2</label>
          <input
            type="text"
            name="relatedTopic2"
            placeholder="Enter the Related Topic 2"
            onChange={changeHandler}
          />
          {errors.relatedTopic2 && (
            <h4>The related topic 2 should have atleast 5 characters</h4>
          )}
        </div>
        <div className="form-control">
          <button type="submit" className="buttonStyle">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
