import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const CardClient = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Clients</span>

        <span className={styles.number}>956</span>

        <span className={styles.detail}>
          <span className={styles.positive}>1%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default CardClient;
