function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Contast />
      <Form />
    </div>
  );
}

export default App;

const Background = () => {
  return <div className="background"></div>;
};

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img className="pfpf" src="/Logo/image.png" alt="" />
          </a>
          <a href="/" className="logo-modern-tech">
            <span className="vertex">CX</span>
            <span className="co">perts</span>
          </a>
        </div>
        {/* Navigation Links */}
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Why CXperts</a>
            </li>
            <li>
              <a href="/Insights">Insights</a>
            </li>
            <li>
              <a href="/Servicest">Services</a>
            </li>
            <li>
              <a href="/Partners">Partners</a>
            </li>
            <li>
              <a href="/Career">Careers</a>
            </li>
            <li>
              <a href="/Blogs">Blogs</a>
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

const Contast = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <p className="subtitle">MODERN OUTSOURCING COMPANY</p>
        <h1 className="main-title">Legendary Customer Experience!</h1>
        <a href="#discover-more" className="cta-button">
          Discover More
        </a>
      </div>
    </div>
  );
};

const Form = () => {
  //   return (
  //     <div className="form-section">
  //       <h2 className="form-title">Get in Touch</h2>
  //       <p className="form-description">
  //         Fill out the form below, and our team will get back to you shortly.
  //       </p>
  //       <form className="contact-form">
  //         <div className="form-group">
  //           <label htmlFor="name">Name</label>
  //           <input type="text" id="name" placeholder="Your Full Name" />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="email">Email</label>
  //           <input type="email" id="email" placeholder="Your Email Address" />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="phone">Phone</label>
  //           <input type="tel" id="phone" placeholder="Your Phone Number" />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="message">Message</label>
  //           <textarea id="message" rows="5" placeholder="Your Message"></textarea>
  //         </div>
  //         <button type="submit" className="submit-button">
  //           Send Message
  //         </button>
  //       </form>
  //     </div>
  //   );
};
