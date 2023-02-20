import '../style/exp_section.css'

import EachExp from './each_exp'

function ExpSection(props) {

    return (
        <div className='project_section'>
            {props.myexp.map((item, index) => {
                return <EachExp designation={item.designation} desc={item.description} company={item.company} skills={item.skills}></EachExp>
            })
            }
        </div>
    );
}

export default ExpSection;