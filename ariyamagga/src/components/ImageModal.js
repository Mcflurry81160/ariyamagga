import React from 'react';

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