import { Fragment } from "react";
import NavBar from "./components/NavBar";
import GetRoutes from "./Routes/GetRoutes";

function App() {
  return (
    <Fragment>
      <NavBar />
      <GetRoutes />
    </Fragment>
  );
}

export default App;
