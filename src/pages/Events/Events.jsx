import Footer from "../../components/Footer/Footer";
import styles from "./events.module.css";
const Events = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Events</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.events}>
            <div className={styles.event}>
              <img src="/event1.jpg" alt="event" />
              <small>Event Date</small>
              <h4>Title</h4>
              <small>Event Venue</small>
            </div>
            <div className={styles.event}>
              <img src="/event1.jpg" alt="event" />
              <small>Event Date</small>
              <h4>Title</h4>
              <small>Event Venue</small>
            </div>
            <div className={styles.event}>
              <img src="/event1.jpg" alt="event" />
              <small>Event Date</small>
              <h4>Title</h4>
              <small>Event Venue</small>
            </div>
            <div className={styles.event}>
              <img src="/event1.jpg" alt="event" />
              <small>Event Date</small>
              <h4>Title</h4>
              <small>Event Venue</small>
            </div>
            <div className={styles.event}>
              <img src="/event1.jpg" alt="event" />
              <small>Event Date</small>
              <h4>Title</h4>
              <small>Event Venue</small>
            </div>
            <div className={styles.event}>
              <img src="/event1.jpg" alt="event" />
              <small>Event Date</small>
              <h4>Title</h4>
              <small>Event Venue</small>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
