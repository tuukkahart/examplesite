import React from 'react'

function Slider2() {
    return (
        <div>
            <div id='carouselExampleControls' className="carousel slide" data-ride="carousel">
                <div className="carousel-inner text-center">
                    <div className="carousel-item active caro1">
                        <div className="d-flex flex-column h-100 align-items-center justify-content-center mask">
                            <div className="container">
                                <h1 className='text-light text-center'>Hotel</h1>
                                <p className="text-light">Furniture with quality and elegance for hotells and other public spaces. We have experience to cooperate with the largest hotell chains in Scandinavia. We can design even the most challencing premises according to the customer’s wishes. We ar cooperating with a talented designers that can build exactly what you want.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item caro3">
                        <div className="d-flex flex-column h-100 align-items-center justify-content-center mask">
                            <div className="container">
                                <h1 className="text-light">Home</h1>
                                <p className="text-light">We think, that everyone deserves a hotel-like experience at home. We spend a lot of time at home, so we want it to be high quality and elegance. That’s why we have opened HotelHome’s selection for everyone - not only for companies. Feels like hotel, feels like home</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item caro2">
                        <div className="d-flex flex-column h-100 align-items-center justify-content-center mask">
                            <div className="container">
                                <h1 className="text-light">COMING SOON</h1>
                                <p className="text-light"></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Slider2
