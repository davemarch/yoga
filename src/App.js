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
import moonPhoto2 from "./Assets/Images/yogaphoto1.jpeg";
import arrowGreen from "./Assets/Icons/icon-arrow-green.png";
import arrowWhite from "./Assets/Icons/icon-arrow-white.png";
import map from "./Assets/Icons/map.png";
import yoga1 from "./Assets/Images/yoga1.jpg";
import yoga2 from "./Assets/Images/yoga2.jpg";
import yoga3 from "./Assets/Images/yoga3.jpg";
import yoga4 from "./Assets/Images/yoga4.jpg";
import yoga5 from "./Assets/Images/yoga5.jpg";
import yoga6 from "./Assets/Images/yoga6.jpg";






class App extends Component {
  state = {
    Header : { heading : <span id="offerCode" style={{color:'black'}}> Luna Yoga Studio - tel: <a href='tel:07927382168.'>07927 382168.</a> </span>,
                // storeLocator : <p id="storeLocator" style={{color:'white'}}></p>,
                logo : logo,
                menu : ['About Us', 'TimeTable', 'Courses', 'Workshops', 'News', 'Pregnancy Yoga','Corporate','FAQ','Contact Us']},
    Main : { heroBackground : moonPhoto2,
              // icedCoffee : moonPhoto2,
              icedCoffeeBg : '#0e141d',
              arrowWhite: arrowWhite,
              arrowGreen: arrowGreen,
              headings: [
              <div className = "headingText"></div>, 
              <div className = "aboutUsText"><h1>About Us</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p></div>, 
              <div className = "newsText"><h1>News</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p></div>, 
              <div className = "pregnancyText"><h1>Pregnancy Yoga</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p></div>, 
              <div className = "corporateText"><h1>Corporate</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p></div>, 
              <div className = "FAQ"><h1>FAQ</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p></div>, 

            ],
              
              spans: [
              <h1 style={{color:'black' , textTransform : "uppercase"}}>Luna Yoga Studio</h1>, 
              <div className = 'prices'>
              <h1 style={{color:'black'}}>Prices</h1>
              <ul>
              <p>1 hour class - £6</p>
              <p>1 hour 15 minutes class - £7</p>
              <p>Family Yoga - £10 for parent and child</p>
              <p>Karen's Ashtanga course - £42</p>

              </ul>
              </div>,
              <div className = 'contact'>
              <h1 style={{color:'black'}}>Contact Us</h1>
              <ul>
              <p>Phone - <a href='tel:07927382168.'>07927 382168.</a></p>
              <p>Address - Luna Yoga Studio, 227A Bacup Road, Rawtenstall, BB4 7PA</p>
              </ul>
              </div>
            ]},
    Tiles : [
              {img : yoga1, title : 'Course 1', subtitle : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.'},
              {img : yoga2, title : 'Course 2', subtitle : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor vestibulum velit, id finibus velit scelerisque nec.'},
              {img : yoga3, title : 'Course 3', subtitle : 'Course Text'}
          ],
    Workshops : [
              {img : yoga4, title : 'Workshop 1', subtitle : 'Workshop Text'},
              {img : yoga5, title : 'Workshop 2', subtitle : 'Workshop Text'},
              {img : yoga6, title : 'Workshop 3', subtitle : 'Workshop Text'}
          ],
    NavFooter : {headings : ["Help", "About Us", "Company Info", "Share"],
              days : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              mondayTimes : ['7-8am, Sunrise Gentle, Vinyasa', '11am - 12.15pm, Relax and Restore', '6:30pm - 7:45pm, Six-week course with Karen'],
              tuesdayTimes : ['', '', '6pm - 7pm, Gentle Vinyasa Flow', '7pm - 8pm Hatha Yoga'],
              wednesdayTimes : ['7-8am, Sunrise Gentle, Vinyasa', '11am - 12.15pm, Relax and Restore', '6pm - 7pm, Family Yoga', '7pm - 8pm Gentle Vinyasa Flow'],
              thursdayTimes : ['', '', '6pm - 7.15pm, Relax and Restore', '7:30pm - 8:30pm Hatha Yoga'],
              fridayTimes : ['', '', 'First Friday of the month', 'Candle Light Yoga. 6:30pm - 8pm'],
              saturdayTimes : ['9am-10am Hatha Yoga'],




              helpLinks : ["My account", 'Stu Cards', "Stu Rewards", "Shipping & Returns", "Current Offers", "Contact Us"],
              aboutLinks : ["Join Stu", 'Social Responsibilty', "Our People", "Newsroom"],
              companyLinks : ['Code Ethics', 'Responsible Sourcing', 'Supply Chain', 'Limited Partners', 'Office Coffee'],
              socialLinks : [<a href='https://www.facebook.com/lunayogastudio1/' target="_blank"><img src={facebook}/></a>, <a href='https://www.instagram.com/luna_yogastudio' target="_blank"><img src={instagram}/></a>]
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
          workshops = {this.state.Workshops}
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
