import React from 'react'
import './Home.css'
import Homeimg from "../../assets/images/Homeimg.png"
// import EventCard from '../../components/EventCard/EventCard'
const Home = () =>{
  return (
    <div className = 'home'>
      <div className = 'title'>
        Fusion<span>Ex</span>
      </div>
      <div className = 'moto'>
        Immerse, Innovate, Inspire
      </div>
      <div className = 'desc'>
        <div>
          <h1 className = 'content-1'>
          Welcome to FusionEx - Where Innovation meets Excitement!
          </h1>
            <img src={Homeimg} alt="Events" className="event-image" /> 
            <p className = 'content-2'>
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
      </div>
    </div>
  )
}

export default Home


// import React from 'react'
// import './Home.css'
// import Homeimg from "../../assets/images/Homeimg.png"

// const Home = () => {
//   return (
//     <div className='home'>
//       <div className='title'>
//         Fusion<span>Ex</span>
//       </div>
//       <div className='moto'>
//         Immerse, Innovate, Inspire
//       </div>
//       <div className='desc'>
//         <h1 className='content-1'>
//           Welcome to FusionEx - Where Innovation meets Excitement!
//         </h1>
//         <div className='content-container'>
//           <img src={Homeimg} alt="Events" className="event-image" />
//           <p className='content-2'>
//             Join us for two exhilarating days packed with cutting-edge workshops, inspiring seminars, dynamic panel 
//             discussions, and a showcase of groundbreaking projects at our Project Expo. This premier event brings 
//             together tech enthusiasts, industry experts, and creative minds for an unforgettable experience. 
//             Whether you're a tech enthusiast, aspiring entrepreneur, or seasoned professional, 
//             FusionEx offers something for everyone. But that's not all! FusionEx goes beyond the typical 
//             tech fest by offering a range of cultural activities, including stand-up comedy, engaging 
//             conversations with film industry professionals, and a pulsating DJ night. 
//             Mark your calendars and get ready for an unforgettable experience at 
//             FusionEx — where ideas come to life and connections are made!
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home
