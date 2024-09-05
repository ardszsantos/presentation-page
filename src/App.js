
import './App.scss';
import ExperienceSection from './components/experience';
import HeroSectionComponent from './components/heroSection';
import NavbarComponent from './components/navbar';
import ProjectsSection from './components/projects';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <HeroSectionComponent/>
      <ProjectsSection/>
      <ExperienceSection/>
    </div>
  );
}

export default App;
