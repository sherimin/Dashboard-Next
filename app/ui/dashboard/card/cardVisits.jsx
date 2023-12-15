import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const CardVisit = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Visits</span>

        <span className={styles.number}>12509</span>

        <span className={styles.detail}>
          <span className={styles.positive}>3%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default CardVisit;
