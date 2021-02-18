import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Carousel() {
    return (
        <div className="top-content">

            <div id="carouselExampleIndicators2" className="carousel slide min-vh-100 d-flex flex-column justify-content-center" data-ride="carousel">
                <h2 className="display-4 text-center">References</h2>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                </ol>
                <div className='container'>
                    <div className="carousel-inner">
                        <div className="carousel-item active justify-content-center">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 order-lg-2">
                                        <div className="p-5">
                                            <img className="img-fluid rounded-square" src="images/scandic.jpeg" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 order-lg-1">
                                        <div className="p-5">
                                            <h2 className="display-4">Scandic Gardemoen, Norway</h2>
                                            <p>Scandic hotell in close of Norway’s central airport Gardemoen. HotelHome implemented NNNNAAAA for this hotel</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center">
                                <div className="col-lg-7 order-lg-2">
                                    <div className="p-5">
                                        <img className="img rounded-square" src="images/arena.jpeg" alt=""></img>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Malmö Arena hotel, Sweden</h2>
                                        <p>Malmö Arena Hotel is a family-owned colourful hotel, offering facilities for events and business, which has 395 rooms at affordable prices. </p>
                                    </div>
                                </div>
                            </div>        
                        </div>
                        <div className="carousel-item">
                            <div className="row align-items-center">
                                    <div className="col-lg-7 order-lg-2">
                                        <div className="p-5">
                                            <img className="img-fluid rounded-square" src="images/aparthotel.jpg"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 order-lg-1">
                                        <div className="p-5">
                                            <h2 className="display-4">Aparthotel Varvstaden Malmö, Sweden</h2>
                                            <p>0Forenom Aparthotel Malmö Varvsstaden is a brand-new aparthotel situated in a renovated property that was originally built in 1912. The property was formerly used as headquarters by Kockums, a shipyard company that was established in Malmö in 1820 and one of the largest employers in the city for a long time.</p>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

            
            
                </div>
            </div>
        </div>
        
    );
}

export default Carousel;

