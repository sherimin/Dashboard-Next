import styles from "../ui/dashboard/dashboard.module.css";
import Card from "../ui/dashboard/card/cardClient";
import RightBar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import CardSales from "../ui/dashboard/card/cardSales";
import CardVisit from "../ui/dashboard/card/cardVisits";
import CardClient from "../ui/dashboard/card/cardClient";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <CardClient />
          <CardSales />
          <CardVisit />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
