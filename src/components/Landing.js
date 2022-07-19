import styles from "../styles/css/Landing.module.css";

const Landing = () => {
    return(
        <section className={styles.imageContainer}>
            <img className={styles.landingImage} src={require("../assets/img/landing.webp")}></img>
        </section>
    );
};

export default Landing;