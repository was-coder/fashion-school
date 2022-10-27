import React, { Fragment } from "react";
import { NavBar, ErrorBoundary } from "./imports/Import";
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
