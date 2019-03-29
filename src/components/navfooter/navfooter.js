import React from 'react';
import './navfooter.css';
import Linktile from "../linktile/linktile.js";
import SocialLinktile from "../sociallinktile/sociallinktile.js";



const Navfooter = (props) => {

    // let linkItems = props.menu.map(function(item){
    //     return <li>{}</li>
    //   })

    return (
    <nav id="navfooter">
        <div className = 'col-social'>
            <SocialLinktile headings = {props.links.headings[3]} links = {props.links.socialLinks}/>
        </div>




    </nav>
    )
};


export default Navfooter;