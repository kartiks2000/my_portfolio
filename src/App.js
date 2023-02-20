import './App.css';

import Footer from './components/footer.js';
import Top from './components/top';
import Nav from './components/nav';
import PortfolioBody from './components/portfolio_body';
import SkillSection from './components/skill_section';
import ProjectsSection from './components/projects_section';
import ExpSection from './components/exp_section';


function App() {

  var my_intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  var myskills = ["Javascript", "Python", "ReactJs", "ExpressJs", "NodeJs", "Laravel", "Django", "NodeJs", "TypeScript", "NodeJs", "AWS", "Azure", "GCP", "VMware", "vSphere", "Problem solving", "vCenter", "Docker", "Kubernetes"]
  var myprojects = [
    {"name": "Lorem Ipsum", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "skills": ["Docker", "Python", "Linux"]},
    {"name": "Lorem Ipsum", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "skills": ["Docker", "Python", "Linux"]},
    {"name": "Lorem Ipsum", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "skills": ["Docker", "Python", "Linux"]},
    {"name": "Lorem Ipsum", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "skills": ["Docker", "Python", "Linux"]},
  ]
  var myexp = [
    {"designation": "Software Engineer", "company": "Velocity", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "skills": ["Docker", "Python", "Linux"]},
    {"designation": "SDE1", "company": "Shipmnts", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "skills": ["Docker", "Python", "Linux"]},
    {"designation": "Product Engineer", "company": "Aditya Birla Group", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "skills": ["Docker", "Python", "Linux"]},
    // {"designation": "Lorem Ipsum", "company": "ABCD", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "skills": ["Docker", "Python", "Linux"]},
  ]

  return (
    <div className="App">
      <div className='top_nav_flex'>
        <Nav></Nav>
        <Top name="KARTIK SAXENA"></Top>
      </div>
      <PortfolioBody my_intro={my_intro}></PortfolioBody>
      <h1 className='sec_heading'>SKILLS</h1>
      <SkillSection myskills={myskills}></SkillSection>
      <h1 className='sec_heading-2'>PROJECTS</h1>
      <ProjectsSection myprojects={myprojects}></ProjectsSection>
      <h1 className='sec_heading-3'>EXPERIENCES</h1>
      <ExpSection myexp={myexp}></ExpSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
