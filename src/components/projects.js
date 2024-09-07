import '../styles/projects.scss'
import ProjectCard from './projectCard';

const ProjectsSection = () => {
  return (  
    <div className="projects-container" id='projects'>
      <h1 className='projects-container-h1'>PROJECTS</h1>
      <div className='projects-container-cards'>
        <a href='https://github.com/ardszsantos/foodi-tailwindreact' target='_blank'><ProjectCard 
          imgUrl={`${process.env.PUBLIC_URL}/foodi.png`}
          title={"Restaurant Landing Page"}
          subtitle={'CLICK HERE TO VISIT'}
        /></a>
        <a href='https://github.com/ardszsantos/foodi-tailwindreact' target='_blank'><ProjectCard 
          imgUrl={`${process.env.PUBLIC_URL}/foodi.png`}
          title={"Restaurant Landing Page"}
          subtitle={'CLICK HERE TO VISIT'}
        /></a>
      </div>
    </div>
  );
}

export default ProjectsSection;