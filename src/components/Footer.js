import { Link } from "react-router-dom";
import styles from "../styles/css/Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <img
          className={styles.kubeIcon}
          src={require("../assets/img/Kubernetes_logo.png")}
        ></img>
        <h2 className={styles.footerTitle} onClick={() => navigate("/")}>Price Comparator</h2>
      </div>
      <div className={styles.footerLinks}>
        <Link to="/resources">Resources</Link>
        <Link to="/support">Support</Link>
        <Link to="/developers">Developers</Link>
      </div>
      <div>
        <p>© Goorm Kube Team 2</p>
      </div>
    </footer>
  );
};

export default Footer;
