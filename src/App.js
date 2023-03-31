import React from "react";
import "./App.css";
import Home from "./Component/Home";
import Dataprovider from "./Context/Dataprovider";
// import Header from './Component/Header';

const App = () => {
  return (
    <>
      {/* <Header/>  */}
      <Dataprovider>
        <Home />
      </Dataprovider>

      {/* <div className="pane top-pane"></div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        />
      </div> */}
    </>
  );
};

export default App;
