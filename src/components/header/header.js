import React from 'react';
import './header.css';
import NavBar from "../navbar/navbar.js";


const Header = (props) => {
    return (
    <header id="headerWrap">
        <a href='#'><img id="logo" src={props.logo}/> </a>
        <span id="header">
        {props.heading}
        {props.storeLocator}
        </span>
        <NavBar   menu = {props.menu} />
    </header>
    )
};


export default Header;