import React from 'react';
import './FaceRecognition.css';

const FaceRecogntion = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img src={imageUrl} alt='' width='500' height='auto' id='inputImage' />
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecogntion;