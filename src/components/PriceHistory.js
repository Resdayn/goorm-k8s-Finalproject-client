import Chart from "../components/Chart";
import styles from "../styles/css/PriceHistory.module.css"

const PriceHistory = () => {
  return (
    <section className={styles.PriceHistoryContainer}>
      <h2 className={styles.PriceHistoryContainerTitle}>Price History</h2>
      <Chart />
    </section>
  );
};

export default PriceHistory;
