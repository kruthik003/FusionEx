import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { guests } from "../../data/chief_guests";
import { partners } from "../../data/partners";
import { FaInstagram, FaTwitter } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              <img src="/Event Logo.svg" alt="logo" width={51} height={45} />
              Fusion of Creativity and Delight{" "}
              <span>• August 24 - 25 • T-hub</span>
            </h1>
            <p className={styles.description}>
              <span>FusionEx</span> will bring together thousands of enthusiasts
              and the leaders redefining the tech and cultural landscape. Join
              us this August 24<sup>th</sup> and 25<sup>th</sup>.{" "}
            </p>
            <div className={styles.btns}>
              <button className={styles.button}>Register Now</button>
              <button className={styles.learn}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      {/* About the event section */}
      <div className={styles.about}>
        <h1 className={styles.section_title}>About the Event</h1>
        <div className={styles.aboutSec}>
          <div className={styles.textSec}>
            <p className={styles.section_description}>
              FusionEx is a platform that brings together the best minds in
              tech, design, and business to explore the latest trends in
              technology and culture. The event will feature a series of
              keynotes, panel discussions, and workshops that will help you stay
              ahead of the curve.
            </p>

            <button className={styles.button}>
              <Link to={"/passes"}>Get Your Pass!</Link>
            </button>
          </div>

          <img src="/about.png" alt="about" />
        </div>

        {/* Events */}

        <div className={styles.events_container}>
          <h1 className={styles.section_title}>Events</h1>
          <div className={styles.events}>
            <div className={styles.event}>
              <h2>Panel Discussions</h2>
              <p>
                Participate in panel discussions with industry leaders and
                innovators.
              </p>
            </div>
            <div className={styles.event}>
              <h2>Workshops</h2>
              <p>
                Learn from the best with our hands-on workshops on design,
                development, and more.
              </p>
            </div>
            <div className={styles.event}>
              <h2>DJ Concert</h2>
              <p>
                Dance the night away with our DJ concert featuring top artists
                and DJs.
              </p>
            </div>
          </div>
          {/* View All Events */}
          <button className={styles.button}>
            <Link to={"/events"}>View All Events</Link>
          </button>
        </div>

        {/* Chief Guests */}

        <div className={styles.chief_guests_container}>
          <h1 className={styles.section_title}>Chief Guests</h1>
          <div className={styles.chief_guests}>
            {guests.map((guest, i) => (
              <div className={styles.chief_guest} key={i}>
                <img src={guest.pic} alt="chief guest" />
                <div className={styles.chief_guest_desc}>
                  <h2>{guest.name}</h2>
                  <p>{guest.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}

        <div className={styles.partners_container}>
          <h1 className={styles.section_title}>Our Partners</h1>
          <div className={styles.partners}>
            {partners.map((partner, i) => {
              return (
                <div className={styles.partner} key={i}>
                  <img src={partner.img} alt={partner.name} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact */}

        <div className={styles.contact_container}>
          <h1 className={styles.section_title}>What are you waiting for?</h1>
          <div>
            <p>Grab your pass now and join us for an exciting event</p>
            <p>See you there pal!!</p>
          </div>
          <button className={styles.button}>
            <Link to={"/passes"}>Click Here</Link>
          </button>
        </div>

        {/* Footer */}

        <div className={styles.footer}>
          <div className={styles.main_footer}>
            <div className={styles.logo}>
              <Link to={"/"}>
                <img src="/Logo Transparent.svg" alt="" />
              </Link>
            </div>
            <div className={styles.portion}>
              <div className={styles.links}>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/events"}>Events</Link>
                <Link to={"/chief_guests"}>Chief Guests</Link>
                <Link to={"/partners"}>Partners</Link>
              </div>
            </div>
            <div className={styles.links_sm}>
              <a href="https://www.instagram.com/fusionex_2024/">
                <FaInstagram />
              </a>
              <a href="https://www.instagram.com/fusionex_2024/">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div>@FusionEx 2024</div>
        </div>
      </div>
    </>
  );
};

export default Home;
