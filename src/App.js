
import './App.scss';
import ExperienceSection from './components/experience';
import FooterComponent from './components/footer';
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
      <FooterComponent/>
    </div>
  );
}

export default App;
