import React, { Fragment } from "react";
import { NavBar, GetRoutes, ErrorBoundary } from "./imports/Import";
// import GetRoutes from "./routes/GetRoutes";

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
