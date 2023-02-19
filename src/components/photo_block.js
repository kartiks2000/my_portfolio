import '../style/photo_block.css'

function PhotoBlock(props) {

    return (
        <div className='photo_block'>
            <div className='img_box'>
                <img className='img_part' src={require('../assets/main_image1.jpeg')}></img>
            </div>
        </div>
    );
}

export default PhotoBlock;