import React from "react";
import Main from "./components/MainComponent";
import { HashRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { ConfigureStore } from "./redux/store.js";
import "./background.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
// import { BrowserRouter } from "react-router-dom";

// const store = ConfigureStore();

function App() {
  return (
    // <Provider store={store}>
    <React.Fragment>
      {/* <div id="stars" />
      <div id="stars2" />
      <div id="stars3" /> */}
      <HashRouter>
        {
          // to be replaced by BrowserRouter
        }
        {/* <BrowserRouter> */}
        <div className="App">
          <Main />
        </div>
      </HashRouter>
      {/* // </Provider> */}
    </React.Fragment>
  );
}

export default App;
