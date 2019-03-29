import React from 'react';
import './timetable.css';
import Linktile from "../linktile/linktile.js";
import SocialLinktile from "../sociallinktile/sociallinktile.js";



const Timetable = (props) => {

    // let linkItems = props.menu.map(function(item){
    //     return <li>{}</li>
    //   })

    return (
    <div id="timetable">
        <div className = "col-Monday timeTable-col">
                <Linktile headings = {props.links.days[0]} links = {props.links.mondayTimes}/>
        </div>
        <div className = "col-Tuesday timeTable-col">
                <Linktile headings = {props.links.days[1]} links = {props.links.tuesdayTimes}/>
        </div>
        <div className = "col-Wednesday timeTable-col">
                <Linktile headings = {props.links.days[2]} links = {props.links.wednesdayTimes}/>
        </div>
        <div className = "col-Thursday timeTable-col">
                <Linktile headings = {props.links.days[3]} links = {props.links.thursdayTimes}/>
        </div>
        <div className = "col-Friday timeTable-col">
                <Linktile headings = {props.links.days[4]} links = {props.links.fridayTimes}/>
        </div>
        <div className = "col-Saturday timeTable-col">
                <Linktile headings = {props.links.days[5]} links = {props.links.saturdayTimes}/>
        </div>
    </div>
    )
};


export default Timetable;