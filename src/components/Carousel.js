import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Carousel() {
    return (
        <div className="top-content">

            <div id="carouselExampleIndicators" className="carousel slide min-vh-100 d-flex flex-column justify-content-center" data-ride="carousel">
                <h2 className="display-4 text-center">Products</h2>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className='container'>
                    <div className="carousel-inner">
                        <div className="carousel-item active justify-content-center">
                            <div className="row align-items-center">
                                <div className="col-lg-8 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-square" src="images/products.jpeg" alt=""></img>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Bed</h2>
                                        <p>Sleeping experience is the most important thing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center">
                                <div className="col-lg-8 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-square" src="images/sohva1.jpeg" alt=""></img>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Sofa and armchair</h2>
                                        <p>Sohvat myös</p>
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center">
                                <div className="col-lg-8 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-square" src="images/project1.jpeg"></img>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Hardwood furniture</h2>
                                        <p>Tables, chairs etc... </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
         </div>   
        
    );
}

export default Carousel;

