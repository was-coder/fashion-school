import { React, lazy, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import AboutId from "../components/AboutId";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";

let Users = lazy(() => import("../components/Users"));

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
