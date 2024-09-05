import '../styles/hero.scss';

const HeroSectionComponent = () => {
  return (  
    <div className='heroSectionWrapper'>
      <div className='heroSectionImage'>
        <img src="https://placehold.co/213x213" alt="minha foto"/>
      </div>
      <div className='heroSectionText'>
        <h1>I do code and <br/> make content <span className='aboutGradient'> about it! </span> </h1>
        <p>
          I am a seasoned full-stack software engineer with over <br/>
          8 years of professional experience, specializing in backend development.<br />
          My expertise lies in crafting robust and scalable SaaS-based<br />
          architectures on the Amazon AWS platform.
        </p>
      </div>
      <div className='heroSectionButtons'>
        <button className='heroButton1'><span>Get in Touch</span></button>
        <button className='heroButton2'><span>Download CV</span></button>
      </div>
      <div className='heroSectionExperiences'>
        <p className='heroSectionExperiencesP'>EXPERIENCE WITH</p>
        <div className='heroSectionExperiencesIcons'>
          <img src={`${process.env.PUBLIC_URL}javascript.svg`}></img>
          <img src={`${process.env.PUBLIC_URL}reactjs.svg`}></img>
          <img src={`${process.env.PUBLIC_URL}css.svg`}></img>
          <img src={`${process.env.PUBLIC_URL}html.svg`}></img>
          <img src={`${process.env.PUBLIC_URL}nodejs.svg`}></img>
          <img src={`${process.env.PUBLIC_URL}pyton2.svg`}></img>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionComponent;

