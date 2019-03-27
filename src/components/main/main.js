import React from 'react';
import './main.css';
import Container from "../container/container.js";
import Span from "../span/span.js";
import TileContainer from "../tilecontainer/tilecontainer.js";
import NavFooter from "../navfooter/navfooter.js";
import Button from "../button/button.js";






const Main = (props) => {
 

        return (
    <div id="main">
        <Container
            background = {props.heroBackground} 
            headings = {props.headings[0]} 
        />
        {/* <Span
            spans = {props.spans[0]}/> */}
            <div className = "icedCoffeeCont">
                {/* <Container  
                    arrow = {props.arrowWhite}

                    icedCoffee = {props.icedCoffee} 
                    icedCoffeeBg = {props.icedCoffeeBg} 
                    headings = {props.headings[1]} 
                    /> */}
            </div>
        <div className="greenBg">
            {/* <Span        
                spans = {props.spans[1]}/> */}
        </div>
        {/* <TileContainer
            arrow = {props.arrowGreen}
            tiles = {props.tiles}/> */}
        <NavFooter 
            links = {props.links}/>
    </div>
    )
};


export default Main;