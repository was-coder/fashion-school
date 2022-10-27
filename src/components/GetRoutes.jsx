import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AboutId from "./AboutId";
import Contact from "./Contact";
import Users from "./Users";
import ErrorPage from "../errors/ErrorPage";
// import {
//   Home,
//   About,
//   AboutId,
//   Contact,
//   ErrorPage,
//   Users,
// } from "../imports/Import";

function GetRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path=":aboutid" element={<AboutId />}></Route>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Fragment>
  );
}

export default GetRoutes;
