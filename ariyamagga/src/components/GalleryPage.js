import React from 'react';

function GalleryPage() {

    return (
        <div class="row">
            <div class="col-md-4">
                <div class="thumbnail">
                    <a href="/w3images/lights.jpg">
                        <img src="https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg" alt="Lights" style={{width:"100%"}}></img>
                        <div class="caption">
                            <p>Lorem ipsum...</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="thumbnail">
                    <a href="/w3images/nature.jpg">
                        <img src="https://www.tripsavvy.com/thmb/ak3sgvCXavEvA-t3ao8Ui82AjM0=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wat-arun-temple-thailand-088091c0417e49c59e90e97597164457.jpg" alt="Nature" style={{width:"100%"}}></img>
                        <div class="caption">
                            <p>Lorem ipsum...</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="thumbnail">
                    <a href="/w3images/fjords.jpg">
                        <img src="https://ariyamaggasenasuna.blob.core.windows.net/imagegallery/download.jpg" alt="Fjords" style={{width:"100%"}}></img>
                        <div class="caption">
                            <p>Lorem ipsum...</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default GalleryPage;

