import '../style/projects_section.css'

import EachProject from './each_project'

function ProjectsSection(props) {

    return (
        <div className='project_section'>
            {props.myprojects.map((item, index) => {
                return <EachProject name={item.name} desc={item.description} skills={item.skills}></EachProject>
            })
            }
        </div>
    );
}

export default ProjectsSection;