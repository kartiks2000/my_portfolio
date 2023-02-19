import './App.css';

import Footer from './components/footer.js';
import Top from './components/top';
import Nav from './components/nav';
import PortfolioBody from './components/portfolio_body';
import SkillSection from './components/skill_section';
import ProjectsSection from './components/projects_section'


function App() {

  var my_intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  var myskills = ["Javascript", "Python", "ReactJs", "ExpressJs", "NodeJs", "Laravel", "Django", "NodeJs", "TypeScript", "NodeJs", "AWS", "Azure", "GCP", "VMware", "vSphere", "Problem solving", "vCenter", "Docker", "Kubernetes"]
  var myprojects = [
    {"name": "Lorem Ipsum", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "skills": ["Docker", "Python", "Linux"]},
    {"name": "Lorem Ipsum", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "skills": ["Docker", "Python", "Linux"]},
    {"name": "Lorem Ipsum", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "skills": ["Docker", "Python", "Linux"]},
  ]

  return (
    <div className="App">
      <div className='top_nav_flex'>
        <Nav></Nav>
        <Top name="KARTIK SAXENA"></Top>
      </div>
      <PortfolioBody my_intro={my_intro}></PortfolioBody>
      <SkillSection myskills={myskills}></SkillSection>
      <ProjectsSection myprojects={myprojects}></ProjectsSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
