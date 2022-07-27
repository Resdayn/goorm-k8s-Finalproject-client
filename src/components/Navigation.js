import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "../styles/css/Navigation.module.css";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navigationBar}>
      <div className={styles.logoSection}>
        <img
          className={styles.navigationBarLogo}
          src={require("../assets/img/Kubernetes_logo.png")}
        ></img>
        <h1 className={styles.navigationBarTitle} onClick={() => navigate("/")}>
          P2P Games<span>beta</span>
        </h1>
        <SearchBar />
        <Link to="/">Home</Link>
        <Link to="/chart">Chart</Link>
        <Link to="/list">List</Link>
      </div>

      <div>
        <button
          className={`${styles.button} ${styles.loginButton}`}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className={`${styles.button} ${styles.registerButton}`}
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
