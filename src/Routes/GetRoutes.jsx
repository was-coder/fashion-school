import { React, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Users from "../components/Users";
import ErrorPage from "../components/ErrorPage";

function GetRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path=":aboutme" element={<AboutMe />}></Route>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/error-page" element={<ErrorPage />} />
      </Routes>
    </Fragment>
  );
}

export default GetRoutes;
