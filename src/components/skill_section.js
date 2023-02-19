import '../style/skill_section.css'

import EachSkill from './each_skill'

function SkillSection(props) {

    return (
        <div className='skill_section'>
            {props.myskills.map((item, index) => {
                return <EachSkill skill={item}></EachSkill>
            })
            }
        </div>
    );
}

export default SkillSection;