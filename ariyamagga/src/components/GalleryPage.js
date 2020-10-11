import React, { useState } from 'react';
import './GalleryPage.css';
import ImageGrid from './ImageGrid';
import ImageModal from './ImageModal';

const GalleryPage = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <ImageGrid setSelectedImage={setSelectedImage} />
            { selectedImage && <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}            
        </div>

    );
}

export default GalleryPage;

