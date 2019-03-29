import React from 'react';
import './navbar.css';


const NavBar = (props) => {

let menuItems = props.menu.map(function(item, index){
    return <li key={index}><a  href={`#${item}`}>{item}</a></li>
  });


    return (
    <nav id="navbar" className='navbar test'>
    <button className="burgerIcon" onClick={function(e){e.currentTarget.parentElement.classList.toggle('active');}}><span className="line"></span></button>   
    <ul>
    {menuItems}
    </ul>
    </nav>
    )
};


export default NavBar;