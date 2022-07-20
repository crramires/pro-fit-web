import { Link } from "react-router-dom";
import "./styles.css";

const Header = ({ setIsAuthenticated, isAuthenticated }) => {
  return (
    <div className="header">
      <Link to={"/"} className="headerLink">
        <h2>Logo</h2>
      </Link>
      <div className="headerMenu">
        <Link to={"/treinos"} className="headerLink">
          Treinos
        </Link>
        {isAuthenticated ? (
          <Link
            to="/"
            className="headerLink"
            onClick={() => setIsAuthenticated(false)}
          >
            Logout
          </Link>
        ) : (
          <Link to="/login" className="headerLink">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
