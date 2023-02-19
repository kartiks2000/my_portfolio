
import PhotoBlock from './photo_block';
import IntroContent from './intro_content'
import '../style/portfolio_body.css'

function PortfolioBody(props) {

    return (
        <div className='portfolio_body'>
            <PhotoBlock></PhotoBlock>
            <IntroContent my_intro={props.my_intro}></IntroContent> 
        </div>
    );
}

export default PortfolioBody;