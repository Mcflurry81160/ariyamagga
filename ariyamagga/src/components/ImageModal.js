import React from 'react';
import './ImageModal.css';
import { motion } from "framer-motion";

const ImageModal = ({ selectedImage, setSelectedImage }) => {

    const handleClick = (e) => {
        setSelectedImage(null);
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <img src={selectedImage} alt="" />
        </motion.div>
    );
}

export default ImageModal;