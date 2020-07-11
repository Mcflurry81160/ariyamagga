import React from 'react';
import Gallery from 'react-photo-gallery';

class GalleryPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            images: this.props.photos
        }
    }

    componentDidMount() {
        let url = '';
        fetch(url)
            .then(response => response.json())
            .then(images => this.setState({ images: images }))
    }

    render() {

        //TODO: implement the react photo gallery. See repository issues for details for the shrinking issue


        return (
            <div>
                <Gallery photos={GetPhotos()} />
            </div>
            // <div className="row">
            //     <div class="col-md-4">
            //         <div class="thumbnail">
            //             <img src="https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg" alt="Lights" style={{ width: "100%" }}></img>
            //         </div>
            //     </div>
            //     <div class="col-md-4">
            //         <div class="thumbnail">
            //             <img src="https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg" alt="" style={{ width: "100%" }}></img>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

function GetPhotos() {
    const photos = [
        {
            src: 'http://example.com/example/img1.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'http://example.com/example/img2.jpg',
            width: 1,
            height: 1
        }
    ];

    return photos;
}

export default GalleryPage;

