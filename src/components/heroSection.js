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
        <button>Get in Touch</button>
        <button>Download CV</button>
      </div>
    </div>
  );
}

export default HeroSectionComponent;