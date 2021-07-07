const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">The Dojo Blog</h1>
      <div className="navbar__linksContent">
        <a className="navbar__link" href="/">
          Home
        </a>
        <a className="navbar__link" href="/create">
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
