import React from 'react';
import './main.css';
import Container from "../container/container.js";
import Span from "../span/span.js";
import TileContainer from "../tilecontainer/tilecontainer.js";
import NavFooter from "../navfooter/navfooter.js";
import Button from "../button/button.js";
import Timetable from "../timetable/timetable.js";
import EmbededContainer from '../embededContainer/embededContainer.js';







const Main = (props) => {
 

        return (
    <div id="main">
        <div className='topContainer'>
            <Container
                background = {props.heroBackground} 
                headings = {props.headings[0]} 
            />
        </div>
        <Span
            spans = {props.spans[0]}/>
                <a className='anchor' name="About Us"/>
        <div className = "content-container aboutUs">
            <Container
                headings = {props.headings[1]} 
            />
        </div>
                <a className='anchor' name="TimeTable"/>
        <div className='content-container timetable'>
            <Timetable 
                        links = {props.links}
                        headings = {props.headings}
            />
        </div>
            <div className='prices'>
                <Span spans = {props.spans[1]}/>
                <Span spans = {props.spans[0]}/>
            </div>
                <a className='anchor' name="Courses"/>
        <div className='content-container courses'>
            <TileContainer
                tiles = {props.tiles}
                />
        </div>
            <a className='anchor' name="Workshops"/>
            <div className='content-container courses'>
                <TileContainer
                tiles = {props.workshops}
                    />
            </div>
                <a className='anchor' name="News"/>
        <div className = "content-container News">
            {/* <Container headings = {props.headings[2]} /> */}
            <EmbededContainer/>

        </div>
            <Span
        // spans = {props.spans[1]}
            />
            <a className='anchor' name="Pregnancy Yoga"/>
            <div className = "content-container Pregnancy">
                <Container
                    headings = {props.headings[3]} 
                />
            </div>
            <a className='anchor' name="Corporate"/>
            <div className = "content-container Corperate">
                <Container
                    headings = {props.headings[4]} 
                />
            </div>            
            <a className='anchor' name="FAQ"/>
            <div className = "content-container FAQ">
                <Container
                    headings = {props.headings[5]} 
                />
            </div>
            <a className='anchor' name="Contact Us"/>
            <div className='content-container contactUs'>
                <Span
                spans = {props.spans[2]}
                    />
            </div>
            <NavFooter 
            links = {props.links}/>
    </div>
    )
};


export default Main;