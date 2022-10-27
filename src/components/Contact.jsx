import React, { Fragment } from "react";

function Contact() {
  return (
    <Fragment>
      <div className="container">
        <form>
          <label htmlFor="name">
            Name:
            <input type="name" placeholder="Enter your name" />
          </label>

          <label htmlFor="email">
            Email:
            <input type="email" placeholder="Enter your email" />
          </label>

          <label htmlFor="phone-number">
            Phone Number:
            <input type="number" placeholder="Enter your Phone number" />
          </label>
          <button className="btn">Submit</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Contact;
