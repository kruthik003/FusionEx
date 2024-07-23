import React from 'react'
import './Home.css'
import Homeimg from "../../assets/images/Homeimg.png"
import {useEffect,useState} from "react"
// import EventCard from '../../components/EventCard/EventCard'
const Home = () =>{
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY > window.scrollX ? window.scrollY : window.scrollX);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const maxScroll = 900; // Adjust this value for where the fade should start and end
  const opacity = Math.max(0, Math.min(1, 1 - Math.abs((scrollPosition - 600) / 600)));

  return (
    <div className = 'home'>
      <div className = 'event_name'>
      <div className = 'title'>
        Fusion<span>Ex</span>
      </div>
      <div className = 'motto'>
        Immerse, Innovate, Inspire
      </div>
      </div>
      <div className = 'desc'>
          <div className = 'content-1'
          style = {{transform : `translateX(calc(${scrollPosition*0.3}px))`,
                    transistion : `transform 0.5s ease`,
                    opacity : opacity,}}>
          <h1>Welcome to FusionEx - Where Innovation meets Excitement!</h1>
            <p>
            Join us for two exhilarating days packed with cutting-edge workshops, inspiring seminars, dynamic panel 
            discussions, and a showcase of groundbreaking projects at our Project Expo. This premier event brings 
            together tech enthusiasts, industry experts, and creative minds for an unforgettable experience. 
            Whether you're a tech enthusiast, aspiring entrepreneur, or seasoned professional, 
            FusionEx offers something for everyone. But that's not all! FusionEx goes beyond the typical 
            tech fest by offering a range of cultural activities, including stand-up comedy, engaging 
            conversations with film industry professionals, and a pulsating DJ night. 
            Mark your calendars and get ready for an unforgettable experience at 
            FusionEx — where ideas come to life and connections are made!
            </p>
          </div>
          <div className = 'event_img' style={{transform : `translateX(calc(-${scrollPosition*0.2}px))`,opacity :opacity,}}>
          <img src={Homeimg} alt="Events"/> 
          </div>
      </div>
    </div>
  )
}

export default Home
