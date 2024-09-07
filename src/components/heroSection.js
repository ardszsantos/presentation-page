import '../styles/hero.scss';

const HeroSectionComponent = () => {
  return (  
    <div className='heroSectionWrapper' id='home'>
      <div className='heroSectionImage'>
        <img src={`${process.env.PUBLIC_URL}/fred.webp`} alt="minha foto"/>
      </div>
      <div className='heroSectionText'>
        <h1>I love to code and <br /> build <span className='aboutGradient'> awesome projects! </span> </h1>
        <p>
          I am a full-stack web developer with over 3 
          years of professional experience,<br /> specializing in front-end development.
          My expertise lies in crafting <br /> stunning web experiences
          with efficiency and passion.
        </p>
      </div>
      <div className='heroSectionButtons'>
        <button className='heroButton1'><span>Get in Touch</span></button>
        <button className='heroButton2'><span>Download CV</span></button>
      </div>
      <div className='heroSectionExperiences'>
        <p className='heroSectionExperiencesP'>EXPERIENCE WITH</p>
        <div className='heroSectionExperiencesIcons'>
          <img src={`${process.env.PUBLIC_URL}/javascript.svg`}></img>
          <img src={`${process.env.PUBLIC_URL}/reactjs.svg`}></img>
          <img src={`${process.env.PUBLIC_URL}/css.svg`}></img>
          <img src={`${process.env.PUBLIC_URL}/html.svg`}></img>
          <img src={`${process.env.PUBLIC_URL}/nodejs.svg`}></img>
          <img src={`${process.env.PUBLIC_URL}/pyton2.svg`}></img>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionComponent;

