import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <div className="container">
        <h1>Waslead Fashion School</h1>
        <h2 className="inner-text">A home for all</h2>
        <NavLink className="links" to="contact">
          Contact Us Today
        </NavLink>
      </div>
    </Fragment>
  );
}

export default Home;
