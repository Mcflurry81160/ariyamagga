import React, { useState, useEffect } from 'react';

const ImageGrid = ({setSelectedImage}) => {

    const [images, setImages] = useState(null);

    useEffect(() => {
        console.log("inside");
        fetch('https://func-app-ariyamaggasenasuna.azurewebsites.net/api/GetGalleryImages', {
            crossDomain: true,
            method: 'GET'
        }).then((response) => response.json())
            .then((jsonData) => {
                let documents = [];
                jsonData.forEach((doc, index) => {
                    documents.push({ url: doc.url, id: index });
                });
                console.log(documents);
                setImages(documents);
            })
    }, []);


    return (
        <div className='image-grid'>
            {images && images.map(image => (
                <div className='image-wrap' key={image.id} onClick={() => { setSelectedImage(image.url) }}>
                    <img src={image.url} alt="" />
                </div>
            ))}
            {!images && <div>Getting images</div>}
        </div>
    );
}

export default ImageGrid;