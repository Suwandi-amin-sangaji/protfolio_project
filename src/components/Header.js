import React from "react";
// inport react Type
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1> Suwandi Amin Sangaji </h1>
                <Typed className = "typed-text" 
                strings={["Front-End Developer", "Back-End Developer" , "Full-Stack Developer" , "Android Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer"> Contact Me</a>
            </div>
        </div>
    )
}

export default Header
