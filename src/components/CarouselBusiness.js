import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Carousel() {
    return (
        <div className="top-content">

            <div id="carouselExampleIndicators3" className="carousel slide carousel-fade min-vh-100 d-flex flex-column justify-content-center" data-ride="carousel">
                <h2 className="display-4 text-center">Our business</h2>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                </ol>
                <div className='container'>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                    <div className="col-lg-7 order-lg-2">
                                        <div className="p-5">
                                            <img className="img-fluid rounded-square" src="images/hotelind1.jpeg" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 order-lg-1">
                                        <div className="p-5">
                                            <h2 className="display-4">Hotel industry</h2>
                                            <p>Furniture with quality and elegance for hotells and other public spaces. We have experience to cooperate with the largest hotell chains in Scandinavia. We can design even the most challencing premises according to the customer’s wishes. We ar cooperating with a talented designers that can build exactly what you want.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="carousel-item">
                            <div className="row ">
                                    <div className="col-lg-7 order-lg-2">
                                        <div className="p-5">
                                            <img className="img-fluid rounded-square" src="images/turnkey.jpeg" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 order-lg-1">
                                        <div className="p-5">
                                            <h2 className="display-4">Turnkey</h2>
                                            <p>In collobration with our largest customer Forenom, we have developed a concept that customer can buy ready hotellroom or apartment as turnkey. Service includes furniture, logistic and assembling. Cost-effective easiness for hotels, apartments, cottages, librarys... you name it</p>
                                        </div>
                                    </div>
                                    
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                    <div className="col-lg-7 order-lg-2">
                                        <div className="p-5">
                                            <img className="img-fluid rounded-square" src="images/project1.jpeg"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 order-lg-1">
                                        <div className="p-5">
                                            <h2 className="display-4">Home</h2>
                                            <p>We think, that everyone deserves a hotel-like experience at home. We spend a lot of time at home, so we want it to be high quality and elegance. That’s why we have opened HotelHome’s selection for everyone - not only for companies. Feels like hotel, feels like home</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
            </div>
        </div>    
        
    );
}

export default Carousel;

