import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

function About() {
  return (
    <Fragment>
      <div className="container">
        <Outlet />
        <h1>About Us</h1>
        <p className="inner-text about-text">
          At Waslead Fashion School, we have a welcoming culture that takes in
          students from all peers of life without being baised of their race,
          colour, religion, nationality, gender to mention a few.
        </p>
        <p className="inner-text about-text">
          We teach students the art, style and beautification of sewing all
          kinds of wears, ranging from suit, kaftan, native wears, casual dress,
          caps, agbada(African Wears) and many more
        </p>
        <p className="inner-text about-text">
          <NavLink className="links about-link" to="/contact">
            Contact Us Today --
          </NavLink>{" "}
          to enrol your ward or yourself to our school.
        </p>

        <p className="inner-text">
          Note: I have a nested child{" "}
          <NavLink className="links" to=":aboutme">
            Click Me
          </NavLink>{" "}
          to view it
        </p>
      </div>
    </Fragment>
  );
}

export default About;
