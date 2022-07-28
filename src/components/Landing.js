import styles from "../styles/css/Landing.module.css";
import { useNavigate } from "react-router";

const Landing = () => {
    const navigate = useNavigate();
    return(
        <section className={styles.imageContainer}>
            <img className={styles.landingImage} src={require("../assets/img/landing.jpg")}></img>
            <button className={styles.joinButton} onClick={() => navigate("/register")}>Join Now!</button>
        </section>
    );
};

export default Landing;