import React from 'react'

function Slider() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner text-center">
                    <div className="carousel-item active align-items-center">
                        <img className="d-block w-100" src="images/hotelind1.jpeg" alt="First slide"></img>
                        <div className='carousel-caption d-none d-md-block text-light d-flex h-50 align-items-center justify-content-center'>
                            <h1>Hotel industry</h1>
                            <p>Furniture with quality and elegance for hotells and other public spaces. We have experience to cooperate with the largest hotell chains in Scandinavia. We can design even the most challencing premises according to the customer’s wishes. We ar cooperating with a talented designers that can build exactly what you want.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/turnkey.jpeg" alt="Second slide"></img>
                        <div className='carousel-caption d-none d-md-block text-light d-flex h-50 align-items-center justify-content-center'>
                            <h1>Turnkey</h1>
                            <p>In collobration with our largest customer Forenom, we have developed a concept that customer can buy ready hotellroom or apartment as turnkey. Service includes furniture, logistic and assembling. Cost-effective easiness for hotels, apartments, cottages, librarys... you name it</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/project1.jpeg" alt="Third slide"></img>
                        <div className='carousel-caption d-none d-md-block text-light d-flex h-50 align-items-center justify-content-center'>
                            <h1>Home</h1>
                            <p>We think, that everyone deserves a hotel-like experience at home. We spend a lot of time at home, so we want it to be high quality and elegance. That’s why we have opened HotelHome’s selection for everyone - not only for companies. Feels like hotel, feels like home</p>
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

export default Slider
