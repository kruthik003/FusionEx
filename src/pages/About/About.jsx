import Footer from "../../components/Footer/Footer";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        {/* Hero */}
        <div className={styles.hero}>
          <h1>
            Hello Mate! <br />
            Know more about <span>FusionEx</span>
          </h1>
        </div>
        {/* About FusionEx */}
        <div className={styles.content}>
          <h1>About FusionEx</h1>
          <div className={styles.about}>
            <p>
              FusionEx, set for August 24th-25th at T-hub, is the ultimate
              celebration of innovation, entertainment, and learning. This
              dynamic event features thrilling activities like an electrifying
              DJ night, intense gaming competitions, and insightful panels on
              future trends. Engage with film stars, laugh with stand-up
              comedians, and immerse yourself in cinematic talent. Plus, enhance
              your skills with hands-on workshops in Machine Learning,
              Blockchain, Cybersecurity, and Flutter. FusionEx promises an
              unforgettable blend of creativity, excitement, and cutting-edge
              technology. Don't miss out on this extraordinary experience!
            </p>
            <img
              src="https://i.pinimg.com/564x/31/31/e5/3131e5a9e71f4be70aa63ed6d5b28813.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Team */}
        <div className={styles.team}>
          <h1>Convenors</h1>
          <div className={styles.team_container}>
            <div className={styles.team_member}>
              <img
                src="https://i.pinimg.com/564x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg"
                alt=""
              />
              <small>Designation</small>
              <h4>Name</h4>
            </div>
            <div className={styles.team_member}>
              <img
                src="https://i.pinimg.com/564x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg"
                alt=""
              />
              <small>Designation</small>
              <h4>Name</h4>
            </div>
            <div className={styles.team_member}>
              <img
                src="https://i.pinimg.com/564x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg"
                alt=""
              />
              <small>Designation</small>
              <h4>Name</h4>
            </div>
            <div className={styles.team_member}>
              <img
                src="https://i.pinimg.com/564x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg"
                alt=""
              />
              <small>Designation</small>
              <h4>Name</h4>
            </div>
            <div className={styles.team_member}>
              <img
                src="https://i.pinimg.com/564x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg"
                alt=""
              />
              <small>Designation</small>
              <h4>Name</h4>
            </div>
            <div className={styles.team_member}>
              <img
                src="https://i.pinimg.com/564x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg"
                alt=""
              />
              <small>Designation</small>
              <h4>Name</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
