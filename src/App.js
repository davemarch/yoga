import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './mobile.css';
import Header from "./components/header/header.js";
import Main from "./components/main/main.js";
import Footer from "./components/footer/footer.js";
import logo from "./Assets/Images/yogamoon.png";
import facebook from "./Assets/Icons/icon-facebook.png";
import instagram from "./Assets/Icons/icon-instagram.png";
import linkedin from "./Assets/Icons/icon-linkedin.png";
import pinterest from "./Assets/Icons/icon-pinterest.png";
import twitter from "./Assets/Icons/icon-twitter.png";
import moonPhoto1 from "./Assets/Images/moonPhoto1.jpg";
import moonPhoto2 from "./Assets/Images/moonPhoto2.jpg";
import icedCoffee from "./Assets/Images/StubrewIcedCoffee.png";
import buyCoffee from "./Assets/Images/buyCoffee.jpg";
import buyTea from "./Assets/Images/buyTea.jpg";
import buyEquipment from "./Assets/Images/buyEquipment.png";
import arrowGreen from "./Assets/Icons/icon-arrow-green.png";
import arrowWhite from "./Assets/Icons/icon-arrow-white.png";
import map from "./Assets/Icons/map.png";





class App extends Component {
  state = {
    Header : { heading : <p id="offerCode" style={{color:'black'}}> Luna Yoga Studio - tel: <a href='tel:016186921133'>0161 869 21133</a> </p>,
                // storeLocator : <p id="storeLocator" style={{color:'white'}}></p>,
                logo : logo,
                menu : ['About Us', 'TimeTable', 'Contact Us', 'Courses', 'Workshops', 'News', 'Corporate']},
    Main : { heroBackground : moonPhoto1,
              // icedCoffee : moonPhoto2,
              icedCoffeeBg : '#0e141d',
              arrowWhite: arrowWhite,
              arrowGreen: arrowGreen,
              headings: [
              <div className = "headingText"><h1> Coming Soon...</h1><h4>Yoga doesn't care if....</h4></div>, 
              // <div className = "icedCoffeeText"><h1>The new <span className='greenText'>StuBrew</span></h1><h4>A delicious new <span className="greenText">nitro brew</span> develop carefully on the darkside of the moon, instilled with the freshness of Stu himself.</h4></div>, 
              ],
              
              spans: [
              <h1 style={{color:'black' , textTransform : "uppercase"}}>Luna Yoga Studio</h1>, 
              // <h1 style={{color:'white'}}>The Stu <span style={{color:'Black'}}>Shop</span>?</h1>
            ]},
    Tiles : [
      {img : buyCoffee, title : 'Shop Coffee', subtitle : 'Hand-Rosted Coffee, delievered fresh for ultimate flavour.'},
      {img : buyTea, title : 'Shop Tea', subtitle : 'Our selection of premium whole leaf tea.'},
      {img : buyEquipment, title : 'Shop equipment', subtitle : 'Brewers and presses for making the perfect Stu at home.'}
  ],
    NavFooter : {headings : ["Help", "About Us", "Company Info", "Share"],
              helpLinks : ["My account", 'Stu Cards', "Stu Rewards", "Shipping & Returns", "Current Offers", "Contact Us"],
              aboutLinks : ["Join Stu", 'Social Responsibilty', "Our People", "Newsroom"],
              companyLinks : ['Code Ethics', 'Responsible Sourcing', 'Supply Chain', 'Limited Partners', 'Office Coffee'],
              socialLinks : [<a href=''><img src={facebook}/></a>, <a href=''><img src={instagram}/></a>, <a href=''><img src={linkedin}/></a>, <a href=''><img src={twitter}/></a>,<a href=''><img src={pinterest}/></a>]
             },
    Footer : {address : <p>Luna Yoga Studio, 227A Bacup Road, Rawtenstall, BB4 7PA </p>,
              links : [''],
              trademark : "",
              map : <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.983666263378!2d-2.279251583879109!3d53.70073698005488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bbd4c2363184f%3A0xbda09ae4bbb3731d!2sValley+Yoga+%26+Ayurvedic+Massage!5e0!3m2!1sen!2suk!4v1553720244003"></iframe>}

}


  render() {
    return (
      <div className="App">
        <Header 
          heading = {this.state.Header.heading} 
          storeLocator = {this.state.Header.storeLocator} 
          logo = {this.state.Header.logo}
          menu = {this.state.Header.menu}
          />
        
        <Main 
          heroBackground = {this.state.Main.heroBackground} 
          icedCoffee = {this.state.Main.icedCoffee} 
          icedCoffeeBg = {this.state.Main.icedCoffeeBg}
          headings = {this.state.Main.headings}
          spans = {this.state.Main.spans}
          tiles = {this.state.Tiles}
          links = {this.state.NavFooter}
          arrowGreen = {this.state.Main.arrowGreen}
          arrowWhite = {this.state.Main.arrowWhite}
          />
        <Footer
          footer = {this.state.Footer}
        />
      </div>
    );
  }
}

export default App;
