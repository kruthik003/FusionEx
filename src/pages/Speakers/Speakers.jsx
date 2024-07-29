import styles from "./speakers.module.css";

const Speakers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Chief Guests</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.guest1}>
          <h3>Speaker 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc nec tincidunt.
          </p>
          <img src="https://via.placeholder.com/150" alt="speaker" />
        </div>
        <div className={styles.guest2}>
          <h3>Speaker 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc nec tincidunt.
          </p>
          <img src="https://via.placeholder.com/150" alt="speaker" />
        </div>
        <div className={styles.guest1}>
          <h3>Speaker 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc nec tincidunt.
          </p>
          <img src="https://via.placeholder.com/150" alt="speaker" />
        </div>
        <div className={styles.guest2}>
          <h3>Speaker 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc nec tincidunt.
          </p>
          <img src="https://via.placeholder.com/150" alt="speaker" />
        </div>
        <div className={styles.guest1}>
          <h3>Speaker 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc nec tincidunt.
          </p>
          <img src="https://via.placeholder.com/150" alt="speaker" />
        </div>
        <div className={styles.guest2}>
          <h3>Speaker 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc nec tincidunt.
          </p>
          <img src="https://via.placeholder.com/150" alt="speaker" />
        </div>
      </div>
    </div>
  );
};

export default Speakers;
