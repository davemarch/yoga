import React from 'react';
import './main.css';
import Container from "../container/container.js";
import Span from "../span/span.js";
import TileContainer from "../tilecontainer/tilecontainer.js";
import NavFooter from "../navfooter/navfooter.js";
import Button from "../button/button.js";
import Timetable from "../timetable/timetable.js";







const Main = (props) => {
 

        return (
    <div id="main">
        <Container
            background = {props.heroBackground} 
            headings = {props.headings[0]} 
        />
        <Span
            spans = {props.spans[0]}/>
        <div className = "middleContainer">
        <Container
            background = {props.icedCoffee} 
            headings = {''} 
        />
       </div>
        <div className="greenBg">

        </div>

        <div className='timetable'>
            <Timetable 
                    links = {props.links}
                    headings = {props.headings}
        />
        </div>
        <Span
        spans = {props.spans[1]}
            />
        <NavFooter 
            links = {props.links}/>
    </div>
    )
};


export default Main;