import { useState } from 'react';
import '../styles/navbar.scss';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbarHeader">
      <div className="navbarHeaderMainWrapper">
        <div className="navbarHeaderLogo">
          <a href="#"><code>ale.dev</code></a>
        </div>
        <nav className="navbarHeaderNav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hamburgerMenu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`dropdownMenu ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#experience" onClick={toggleMenu}>Experience</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>
    </header>
  );
};

export default NavbarComponent;
