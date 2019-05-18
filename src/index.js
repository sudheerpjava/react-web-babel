import React from "react";
import ReactDOM from "react-dom";
import Header from './components/header/Header';
import Home from "./components/home/Home";
import NavHeader from "./components/nav/NavHeader"

const AppElement = () => {
  return <div><Header/><NavHeader/><Home/></div>;
};

ReactDOM.render(<AppElement/>, document.getElementById("index"));