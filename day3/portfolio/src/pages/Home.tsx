import { Link } from "react-router-dom";

import profileImg from "../assets/gambar1.png";

function Home() {
  return (
    <div className="page-container">
      <header className="navbar">
        <nav className="nav-links">
          <Link to="/" className="nav-item active">
            Home
          </Link>
          <Link to="#" className="nav-item">
            Case Studies
          </Link>
          <Link to="#" className="nav-item">
            Testimonials
          </Link>
          <Link to="#" className="nav-item">
            Recent work
          </Link>
          <Link to="#" className="nav-item">
            Get In Touch
          </Link>
        </nav>
        <div className="social-links">
          <a href="#" className="social-item">
            in
          </a>
          <a href="#" className="social-item">
            Be
          </a>
          <a href="#" className="social-item">
            twitter
          </a>
        </div>
      </header>

      <div className="section">
        <div className="content">
          <h1 className="title">Your Name Here</h1>
          <p className="description">
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn">Let’s get started</button>
        </div>

        <div className="image">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
      </div>

      <div className="worked">
        <p className="worked-label">Worked with</p>
        <div className="logo">
          <div className="logo-card">ClickUp</div>
          <div className="logo-card">Dropbox</div>
          <div className="logo-card">PAYCHEX</div>
          <div className="logo-card">elastic</div>
          <div className="logo-card">stripe</div>
        </div>
      </div>
    </div>
  );
}
export default Home;
