import '../styles/navbar.scss';

const NavbarComponent = () => {
  return (  
    <header className='navbarHeader'>
      <div className='navbarHeaderMainWrapper'>
        <div className='navbarHeaderLogo'>
          <a href='#'><code>ale.dev</code></a>
        </div>
        <nav className='navbarHeaderNav'>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default NavbarComponent;