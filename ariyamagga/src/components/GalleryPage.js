import React from 'react';
import Gallery from 'react-photo-gallery';

class GalleryPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            images: []
        }
    }

    componentDidMount() {
        //fetch the images from azure storage
        //update the state imageInfo
        //these will be passed in as the photos props in the render method
        console.log("component mounted");
        
        fetch('https://func-app-ariyamaggasenasuna.azurewebsites.net/api/GetGalleryImages',
            {
                crossDomain: true,
                method: 'GET'
            })
            .then((response) => response.json())
            .then(data => {this.setState({
                images: data.map(image => ({
                    src: image.Uri
                }))
            })});
            // .catch((error) => console.error(error))
            // .finally(() => {
            //     this.setState({ isLoading: false });
            // });
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
        // {
        //     src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
        //     // width: 4,
        //     // height: 3
        // },
        // {
        //     src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
        //     // width: 4,
        //     // height: 3
        // },
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            // width: 4,
            // height: 3
        },
        {
            src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
            // width: 4,
            // height: 3
        },
        {
            src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
            // width: 4,
            // height: 3
        }
        // {
        //     src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
        //     // width: 4,
        //     // height: 3
        // },
        // {
        //     src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
        //     // width: 4,
        //     // height: 3
        // },
        // {
        //     src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
        //     // width: 4,
        //     // height: 3
        // },
        // {
        //     src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
        //     // width: 4,
        //     // height: 3
        // },
        // {
        //     src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
        //     // width: 4,
        //     // height: 3
        // },
        // {
        //     src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
        //     // width: 4,
        //     // height: 3
        // },
        // {
        //     src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
        //     // width: 4,
        //     // height: 3
        // },
        // {
        //     src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
        //     // width: 4,
        //     // height: 3
        // },
        // {
        //     src: 'https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg',
        //     // width: 4,
        //     // height: 3
        // },
        // {
        //     src: 'https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg',
        //     // width: 4,
        //     // height: 3
        // }
   

    ];

    return photos;
}

export default GalleryPage;

