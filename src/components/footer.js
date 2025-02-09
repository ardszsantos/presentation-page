import '../styles/footer.scss'

const FooterComponent = () => {
  return (  
    <footer className='footer-container' id='contact'>
      <div className='footer-container-wrapper'>
          <div className='footer-container-wrapper-upperText'>
            <h1>Contact</h1>
            <p className='footer-container-p'>Desenvolvedor Full Stack com 2 anos de experiência na criação de aplicações web. Baseado em São Paulo, Brasil, foco em oferecer soluções limpas e eficientes enquanto aprimoro continuamente minhas habilidades tanto em tecnologias front-end quanto back-end.</p>

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