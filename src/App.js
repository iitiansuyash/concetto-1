import React from "react";
import Main from "./components/MainComponent";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <div className="App">
          <Main />
        </div>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
