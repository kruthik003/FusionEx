import React from 'react'
import {useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Chief_Guests.css'
import images from '../../Image'
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
const Chief_Guests = () => {
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
  const opacity = Math.min(1,scrollPosition/300);
  return (
    <div className = 'chief_guests'>
      <div className = 'head'>
        Speakers
      </div>
      <div className = 'guests'>
        <div className = 'guest_row' style = {{opacity : opacity}}>
            <div className = 'guest_img'>
                <img src = {images['Thub.JPG']} alt = ''></img>
            </div>
            <div className = 'guest_info'>
                <p>CEO, T-HUB</p>
                <h2>Srinivas Rao Mahankali</h2>
                <div className = 'icons'>
                    <FontAwesomeIcon icon = {faXTwitter} className = 'icon'/>
                    <FontAwesomeIcon icon = {faInstagram} className = 'icon'/>
                </div>
            </div>
            <div className = 'content'>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; We are honored to welcome Srinivas Rao Mahankali, CEO of T-Hub, as our distinguished chief guest. Under his visionary leadership, T-Hub has become a premier innovation hub, driving transformative change in the startup ecosystem. His commitment to fostering entrepreneurship and technological advancement makes him an inspiring presence at our event.</p>
            </div>
        </div>
        <div className = 'guest_row' style = {{opacity : opacity}}>
            <div className = 'guest_img'>
                <img src = {images['Citco.jpg']} alt = ''></img>
            </div>
            <div className = 'guest_info'>
                <p>COUNTRY HEAD, CITCO</p>
                <h2>Amit Verma</h2>
                <div className = 'icons'>
                    <FontAwesomeIcon icon = {faXTwitter} className = 'icon'/>
                    <FontAwesomeIcon icon = {faInstagram} className = 'icon'/>
                </div>
            </div>
            <div className = 'content'>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Amit Verma, Country Head of Citco, is renowned for his exceptional leadership and strategic vision. His work has greatly enhanced Citco's presence in the financial sector. His expertise promises valuable insights and inspiration.</p>
            </div>
        </div>
        <div className = 'guest_row' style = {{opacity : opacity}}>
            <div className = 'guest_img'>
                <img src = {images['KW.jpeg']} alt = ''></img>
            </div>
            <div className = 'guest_info'>
                <p>FOUNDER & CEO, KWCG</p>
                <h2>Khalid Wani</h2>
                <div className = 'icons'>
                    <FontAwesomeIcon icon = {faXTwitter} className = 'icon'/>
                    <FontAwesomeIcon icon = {faInstagram} className = 'icon'/>
                </div>
            </div>
            <div className = 'content'>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Khalid Wani is the Founder and CEO of KWCG, a dynamic leader renowned for his innovative vision and strategic expertise. Under his guidance, KWCG has achieved remarkable growth and established itself as a leader in the industry.</p>
            </div>
        </div>
        <div className = 'guest_row' style = {{opacity : opacity}}>
            <div className = 'guest_img'>
                <img src = {images['AM.jpeg']} alt = ''></img>
            </div>
            <div className = 'guest_info'>
                <p>VICE PRESIDENT, QUALCOMM</p>
                <h2>Amiya Mishra</h2>
                <div className = 'icons'>
                    <FontAwesomeIcon icon = {faXTwitter} className = 'icon'/>
                    <FontAwesomeIcon icon = {faInstagram} className = 'icon'/>
                </div>
            </div>
            <div className = 'content'>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Amiya Mishra is the Vice President of Qualcomm, where he plays a pivotal role in driving technological advancements and strategic initiatives. With extensive expertise in the tech industry, Mishra is renowned for his leadership and innovative approach. His contributions continue to shape the future of technology on a global scale.</p>
            </div>
        </div>
        <div className = 'guest_row' style = {{opacity : opacity}}>
            <div className = 'guest_img'>
                <img src = {images['NANI.jpg']} alt = ''></img>
            </div>
            <div className = 'guest_info'>
                <p>FILM ACTOR</p>
                <h2>NANI</h2>
                <div className = 'icons'>
                    <FontAwesomeIcon icon = {faXTwitter} className = 'icon'/>
                    <FontAwesomeIcon icon = {faInstagram} className = 'icon'/>
                </div>
            </div>
            <div className = 'content'>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; Nani, a celebrated actor in the Indian film industry, is known for his exceptional talent and versatility. With a string of successful films and a dedicated fan base, Nani continues to captivate audiences with his engaging performances and charismatic presence.</p>
            </div>
        </div>
        <div className = 'guest_row' style = {{opacity : opacity}}>
            <div className = 'guest_img'>
                <img src = {images['Brahmi.jpg']} alt = ''></img>
            </div>
            <div className = 'guest_info'>
                <p>FILM ACTOR, COMEDIAN</p>
                <h2>Brahmanandam</h2>
                <div className = 'icons'>
                    <FontAwesomeIcon icon = {faXTwitter} className = 'icon'/>
                    <FontAwesomeIcon icon = {faInstagram} className = 'icon'/>
                </div>
            </div>
            <div className = 'content'>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Brahmanandam, a legendary figure in Telugu cinema, is celebrated for his unparalleled comedic talent and impeccable timing. With a career spanning decades, he has delivered countless memorable performances, earning him a special place in the hearts of audiences. His wit and humor have made him a beloved icon in the film industry.</p>
            </div>
        </div>
        <div className = 'guest_row' style = {{opacity : opacity}}>
            <div className = 'guest_img'>
                <img src = {images['SRV.jpeg']} alt = ''></img>
            </div>
            <div className = 'guest_info'>
                <p>FILM DIRECTOR</p>
                <h2>Sandeep Reddy Vanga</h2>
                <div className = 'icons'>
                    <FontAwesomeIcon icon = {faXTwitter} className = 'icon'/>
                    <FontAwesomeIcon icon = {faInstagram} className = 'icon'/>
                </div>
            </div>
            <div className = 'content'>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Sandeep Reddy Vanga is a prominent film director renowned for his innovative storytelling and impactful narratives. His directorial ventures, including the critically acclaimed "Arjun Reddy", have redefined modern cinema. Vanga's creative vision and bold approach continue to inspire and influence the film industry.</p>
            </div>
        </div>
        <div className = 'guest_row' style = {{opacity : opacity}}>
            <div className = 'guest_img'>
                <img src = {images['RANA.jpg']} alt = ''></img>
            </div>
            <div className = 'guest_info'>
                <p>FILM ACTOR</p>
                <h2>RANA Daggubati</h2>
                <div className = 'icons'>
                    <FontAwesomeIcon icon = {faXTwitter} className = 'icon'/>
                    <FontAwesomeIcon icon = {faInstagram} className = 'icon'/>
                </div>
            </div>
            <div className = 'content'>
                <p> &nbsp;&nbsp;&nbsp;&nbsp; Rana Daggubati is a prominent actor and producer known for his powerful roles in Telugu and Hindi cinema. With acclaimed performances in films like Baahubali and Ghazi, he has established himself as a versatile and dynamic force in the industry. His remarkable contributions continue to make a significant impact on Indian cinema.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Chief_Guests
