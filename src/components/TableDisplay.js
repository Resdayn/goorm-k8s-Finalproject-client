import styles from "../styles/css/TableDisplay.module.css";
import TestTable from "../components/TestTable";

const TableDisplay = () => {
    return(
        <section className={styles.gridContainer}>
            <TestTable />
            <TestTable />
        </section>
    );
};

export default TableDisplay;