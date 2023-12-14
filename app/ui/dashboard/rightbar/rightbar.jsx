import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import styles from "./rightbar.module.css";

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            alt="background"
            fill
            className={styles.bg}
          />
        </div>

        <div className={styles.texts}>
          <span className={styles.notification}> 🔥 Available Now </span>
          <h3 className={styles.title}>
            {" "}
            Guide to use the new admin dashboard{" "}
          </h3>
          <span className={styles.subtitle}>
            Takes approximately 4 minutes to read.
          </span>
          <p className={styles.description}>
            Learn how to switch theme, update order status, check your weekly
            recap, and more!
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Read
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}> ✨ Just Launched </span>
          <h3 className={styles.title}> New Feature: Light Theme 💡 </h3>
          <span className={styles.subtitle}>
            Takes approximately 1 minute to watch.
          </span>
          <p className={styles.description}>
            Now you can change the theme to light!
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
