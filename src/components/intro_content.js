import '../style/intro_content.css'

function IntroContent(props) {

    return (
        <div className='intro_content'>
            <p1>{props.my_intro}</p1>
        </div>
    );
}

export default IntroContent;