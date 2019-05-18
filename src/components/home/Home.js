import React, { Component } from "react";
import '../../components/home/home.css'
//import homeImage from "../home/homeImage.jpg";
class Home extends Component {
    render() {
        return (
            <div className="home">
            <img src={require('./homePage.jpg')} />
            </div>  
        );
    }
}

export default Home;