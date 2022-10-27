import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import ErrorBoundary from "./errors/ErrorBoundary";
// import { NavBar, ErrorBoundary } from "./imports/Import";
import GetRoutes from "./components/GetRoutes";

function App() {
  return (
    <ErrorBoundary>
      <Fragment>
        <NavBar />
        <GetRoutes />
      </Fragment>
    </ErrorBoundary>
  );
}

export default App;
