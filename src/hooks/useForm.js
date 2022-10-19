import { useState } from "react";
import { omit } from "lodash";
import * as moment from "moment";

const UseForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    event.persist();
    const name = event.target.name;
    const val = event.target.value;
    validate(event, name, val);
    setValues({
      ...values,
      [name]: val,
    });
  };
  const validate = (name, value) => {
    switch (name) {
      case "topic":
        if (value.length <= 10) {
          setErrors({
            ...errors,
            topic: "Topic should contain atleast 10 characters",
          });
        } else {
          let newObj = omit(errors, "topic");
          setErrors(newObj);
        }
        break;
      case "email":
        var isEmail = new RegExp(
          /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
        ).test(value);
        if (!isEmail) {
          setErrors({
            ...errors,
            email: "Enter the valid Email Address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "date":
        const date = value;
        // const dateFormat = 'DD-MM-YYYY';
        const dateFormat = "DD MONTH";
        const toDateFormat = moment(new Date(date)).format(dateFormat);
        var isDate = moment(toDateFormat, dateFormat, true).isValid();
        if (!isDate) {
          setErrors({
            ...errors,
            date: "Enter the Valid Date",
          });
        } else {
          let newObj = omit(errors, "date");
          setErrors(newObj);
        }
        break;
      case "description":
        if (value.length <= 10) {
          setErrors({
            ...errors,
            description: "Description should contain atleast 10 characters",
          });
        } else {
          let newObj = omit(errors, "description");
          setErrors(newObj);
        }
        break;
      case "relatedTopic1":
        if (value.length <= 5) {
          setErrors({
            ...errors,
            relatedTopic1:
              "The related topic 1 should have atleast 5 characters",
          });
        } else {
          let newObj = omit(errors, "relatedTopic1");
          setErrors(newObj);
        }
        break;
      case "relatedTopic2":
        if (value.length <= 5) {
          setErrors({
            ...errors,
            relatedTopic2:
              "The related topic 2 should have atleast 5 characters",
          });
        } else {
          let newObj = omit(errors, "relatedTopic2");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const changeSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert("Error in the Blog Details Form data");
    }
    event.target.reset();
  };

  return {
    values,
    errors,
    changeHandler,
    changeSubmit,
  };
};

export default UseForm;
