import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">The Dojo Blog</h1>
      <div className="navbar__linksContent">
        <Link className="navbar__link" to="/">
          Home
        </Link>
        <Link className="navbar__link" to="/create">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
