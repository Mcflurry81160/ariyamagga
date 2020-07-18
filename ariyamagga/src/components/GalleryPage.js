import React from 'react';
import Gallery from 'react-photo-gallery';

class GalleryPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            imageUrls: this.props.photos
        }
    }

    componentDidMount() {
        let url = '';
        fetch(url)
            .then(response => response.json())
            .then(imageUrls => this.setState({ imageUrls: imageUrls }))
    }

    render() {

        return (
            <div>
                <Gallery photos={GetPhotos()} />
            </div>
        );
    }
}

function GetPhotos() {
    const photos = [
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
            width: 1,
            height: 1
        },
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            width: 4,
            height: 2
        },
        {
            src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            width: 4,
            height: 3
        }, 
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            width: 4,
            height: 3
        }

    ];

    return photos;
}

export default GalleryPage;

