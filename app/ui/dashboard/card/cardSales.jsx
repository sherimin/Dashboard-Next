import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const CardSales = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Sales</span>

        <span className={styles.number}>$ 9080</span>

        <span className={styles.detail}>
          <span className={styles.negative}>1%</span> less than previous week
        </span>
      </div>
    </div>
  );
};

export default CardSales;
