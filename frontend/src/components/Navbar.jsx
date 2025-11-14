import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-circle">🧠</div>
        <span className="logo-text">Reddit Ideas</span>
      </div>

      <div className="nav-right">
        <a
          href="https://github.com/yourusername/yourrepo"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
