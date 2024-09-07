import '../styles/footer.scss'

const FooterComponent = () => {
  return (  
    <footer className='footer-container' id='contact'>
      <div className='footer-container-wrapper'>
          <div className='footer-container-wrapper-upperText'>
            <h1>Contact</h1>
            <p className='footer-container-p'>Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing
              and implementing robust, scalable, and innovative web solutions. Adept at leveraging a
              comprehensive skill set encompassing front-end and back-end technologies </p>
          </div>
          <div className='footer-container-wrapper-email'>
              <img src={`${process.env.PUBLIC_URL}/email-icon.svg`} alt="email-icon" />
            <p>
              fredredev@gmail.com
            </p>
          </div>
          <div className='footer-container-wrapper-socials'>
            <img src={`${process.env.PUBLIC_URL}/instagram.svg`} alt="instagram" />
            <img src={`${process.env.PUBLIC_URL}/x.svg`} alt="twitterX" />
            <img src={`${process.env.PUBLIC_URL}/youtube.svg`} alt="youtube" />
          </div>
      </div>
    </footer>
  );
}

export default FooterComponent;