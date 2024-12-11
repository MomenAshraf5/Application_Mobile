const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <a href="/" className="logo-modern-tech">
            <span className="co">Co</span>
            <span className="vertex">VERTEX</span>
          </a>
        </div>
        {/* Navigation Links */}
        <nav className="nav">
          <ul>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        {/* Call to Action Button */}
        <div className="cta">
          <a href="/get-started">Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
