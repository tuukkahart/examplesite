import React from 'react'

function Caronew() {
    return (
        <div>
            <div id='carouselExampleControls1' className="carousel slide" data-ride="carousel">
                <div className="carousel-inner text-center text-dark mask2">





                    <div className="carousel-item active">
                        <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 order-lg-2">
                                        <div className="p-5">
                                            <img className="img-fluid rounded-square" src="images/products.jpeg" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 order-lg-1">
                                        <div className="p-5 d-flex flex-column h-100 align-items-center justify-content-center">
                                            <h2 className="display-4">Beds</h2>
                                            <p>One of our biggest passion is beds. You spend 6-10 hours per day in a bed. It really matters what the comfort and quality is. With HotelHome, sleeping will be the best time of your life.</p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 order-lg-2">
                                        <div className="p-5">
                                            <img className="img-fluid rounded-square" src="images/armchair.jpeg"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 order-lg-1">
                                        <div className="p-5 d-flex flex-column h-100 align-items-center justify-content-center">
                                            <h2 className="display-4">Chairs</h2>
                                            <p>Classic, moderns, slender, voluminous chairs in many different needs. To the kitchen, conference room, hotel lounge... You name it</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 order-lg-2">
                                        <div className="p-5">
                                            <img className="img-fluid rounded-square" src="images/sohva1.jpeg" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 order-lg-1">
                                        <div className="p-5 d-flex flex-column h-100 align-items-center justify-content-center">
                                            <h2 className="display-4">Sofas</h2>
                                            <p>
                                            Sofa is an eye-catcher of each living rooms. Choose it wisely. Sleeping sofa adds versaility in compact rooms.
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>      
                                   
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 order-lg-2">
                                        <div className="p-5">
                                            <img className="img-fluid rounded-square" src="images/puff.jpeg"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 order-lg-1">
                                        <div className="p-5 d-flex flex-column h-100 align-items-center justify-content-center">
                                            <h2 className="display-4">Puffs</h2>
                                            <p>Puff adds style and versatility in rooms where space is tight. Put it match with your bed.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    




                </div>
            
                <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Caronew
