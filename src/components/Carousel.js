import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Carousel() {
    return (
        <div className="top-content min-vh-100">

            <div id="carouselExampleIndicators" className="carousel slide d-flex flex-column justify-content-center" data-ride="carousel">
                
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className='container d-flex justify-content-center'>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-8 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-square" src="images/products.jpeg" alt=""></img>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Bed</h2>
                                        <p>You spend 6-10 hours per day in a bed. It really matters what the comfort and quality is. With HotelHome, sleeping will be the best time of your life.</p>
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
                                        <h2 className="display-4">Sofa</h2>
                                        <p>
                                        Sofa is an eye-catcher of each living rooms. Choose it wisely. Sleeping sofa adds versaility in compact rooms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center">
                                <div className="col-lg-8 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-square" src="images/armchair.jpeg"></img>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Chair</h2>
                                        <p>Classic, moderns, slender, voluminous chairs in many different needs. To the kitchen, conference room, hotel lounge... You name it</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row align-items-center">
                                <div className="col-lg-8 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-square" src="images/table.jpg"></img>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Table</h2>
                                        <p>Table is a heart of every kitchen and a pivot of every meeting. Choose the one you like - we guarantee it will last.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row align-items-center">
                                <div className="col-lg-8 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-square" src="images/puff.jpeg"></img>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Puff</h2>
                                        <p>Puff adds style and versatility in rooms where space is tight. Put it match with your bed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row align-items-center">
                                <div className="col-lg-8 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-square" src="images/desklamp.jpg"></img>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Lamp</h2>
                                        <p>After a long and hectic day you will quiet down with your favorite book, a pleasant lamp allows your quality moment with just correct feeling.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center">
                                <div className="col-lg-8 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid rounded-square" src="images/pillow.jpg"></img>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Textiles</h2>
                                        <p>A high quality pillow, duvet and other textiles will make the highlight of your day even better</p>
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

