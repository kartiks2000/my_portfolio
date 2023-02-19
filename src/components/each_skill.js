import '../style/each_skill.css'

function EachSkill(props) {

    return (
        <div className='each_skill'>
           <p className='skill_name'>{props.skill}</p>
        </div>
    );
}

export default EachSkill;