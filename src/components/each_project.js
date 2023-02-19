import '../style/each_project.css'



function EachProject(props) {

    return (
        <div className='each_project_section'>
            <h1 className='project_name'>{props.name}</h1>
            <p className='project_description'>{props.desc}</p>
            {/* <div className='skill_section'>
                <h3>Skill.</h3>
            </div> */}
        </div>
    );
}

export default EachProject;