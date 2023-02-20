import '../style/each_exp.css'



function EachExp(props) {

    return (
        <div className='each_exp_section'>
            <h1 className='exp_desg'>{props.designation}</h1>
            <h2 className='exp_comp'>{props.company}</h2>
            <p className='exp_description'>{props.desc}</p>
            {/* <div className='skill_section'>
                <h3>Skill.</h3>
            </div> */}
        </div>
    );
}

export default EachExp;