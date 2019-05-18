import React from "react";
import ReactDOM from "react-dom";
import Header from './components/header/Header';
import Home from "./components/home/Home";

const AppElement = () => {
  return <div><Header/><Home/></div>;
};

ReactDOM.render(<AppElement/>, document.getElementById("index"));