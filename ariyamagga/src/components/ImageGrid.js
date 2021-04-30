import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Spinner } from 'react-bootstrap';

const ImageGrid = ({setSelectedImage}) => {

    const [images, setImages] = useState(null);

    useEffect(() => {
        fetch('https://func-app-ariyamaggasenasuna.azurewebsites.net/api/GetGalleryImages', {
            crossDomain: true,
            method: 'GET'
        }).then((response) => response.json())
            .then((jsonData) => {
                let documents = [];
                jsonData.forEach((doc, index) => {
                    documents.push({ url: doc.url, id: index });
                });
                // console.log(documents);
                setImages(documents);
            })
    }, []);


    return (
        <div className='image-grid'>
            {!images && 
            <Spinner className="spinner" animation="border" role="status" variant="secondary">
                <span className="sr-only">Loading...</span>
            </Spinner>}
            {images && images.map(image => (
                <motion.div className='image-wrap' key={image.id} 
                    whileHover={{opacity: 1}} onClick={() => { setSelectedImage(image.url) }}>
                    <motion.img src={image.url} alt="" 
                    initial={{opacity:0}}
                    animate={{opacity:1}}/>
                </motion.div>
            ))}
        </div>
    );
}

export default ImageGrid;