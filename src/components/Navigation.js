import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><h1>Steam DB Clone</h1></li>
                <li><SearchBar /></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chart">Chart</Link></li>
                <li><Link to="/list">List</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;