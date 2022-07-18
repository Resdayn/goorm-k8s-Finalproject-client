import SearchBar from "./SearchBar";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><h1>Steam DB Clone</h1></li>
                <li><SearchBar /></li>
                <li><button>Sign In</button></li>
            </ul>
        </nav>
    );
};

export default Navigation;