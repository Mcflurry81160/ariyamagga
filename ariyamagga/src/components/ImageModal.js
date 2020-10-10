import React from 'react';
import './ImageModal.css';

const ImageModal = ({ selectedImage, setSelectedImage }) => {

    const handleClick = (e) => {
        setSelectedImage(null);
    }

    return(
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImage} alt=""></img>
        </div>
    );
}

export default ImageModal;