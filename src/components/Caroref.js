import React from 'react'

function Caroref() {
    return (
        <div>
            <div id='carouselExampleControls2' className="carousel slide mask1bg" data-ride="carousel">
                <div className="carousel-inner text-center text-light mask1">


                    <div className="carousel-item active">
                        <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 order-lg-2">
                                        <div className="p-5">
                                            <img className="img-fluid rounded-square" src="images/scandic.jpeg" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 order-lg-1">
                                        <div className="p-5">
                                            <h2 className="display-5">Scandic Gardemoen</h2>
                                            <p>Gardemoen, Norway</p>
                                            <p>Situated just 6 minutes from Oslo Airport, Scandic Oslo Airport is pratically located for your next meeting and a  useful stopover on your travels.</p>
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
                                            <img className="img rounded-square" src="images/Norge.jpg" width="300" height="200" alt="Oslofjörd Convention Center"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 order-lg-1">
                                        <div className="p-5">
                                            <h2 className="display-5">Oslofjord Convention center </h2>
                                            <p>Melsomvik, Norway</p>
                                            <p>Welcome to one of European´s largest conference destinations. Everything is on site here, from the Vestfold coast, a golf course and a coastal path. A place for friendship, fellowship, great thoughts, and big dreams</p>
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
                                            <img className="img rounded-square" src="images/MalmoArena.jpeg" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 order-lg-1">
                                        <div className="p-5">
                                            <h2 className="display-5">Malmö Arena hotel</h2>
                                            <p>Malmö, Sweden</p>
                                            <p>Malmö Arena Hotel is a family-owned colourful hotel, offering facilities for events and business, which has 395 rooms at affordable prices. </p>
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
                                            <img className="img-fluid rounded-square" src="images/aparthotel.jpg"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 order-lg-1">
                                        <div className="p-5">
                                            <h2 className="display-5">Aparthotel Varvstaden</h2>
                                            <p>Malmö, Sweden</p>
                                            <p>Forenom Aparthotel Malmö Varvsstaden is a brand-new aparthotel situated in a renovated property that was originally built in 1912. The property was formerly used as headquarters by Kockums, a shipyard company that was established in Malmö in 1820</p>
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
                                            <img className="img-fluid rounded-square" src="images/bohus.jpg"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 order-lg-1">
                                        <div className="p-5">
                                            <h2 className="display-5">Bohusgården Hotel</h2>
                                            <p>Uddevalla, Sweden</p>
                                            <p>With Bohusgården you will find a large selection of conference rooms. They have 30 fully equipped conference rooms, all in different designs to suit both the small group and the large</p>
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
                                            <img className="img-fluid rounded-square" src="images/jyvaskyla.webp"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 order-lg-1">
                                        <div className="p-5">
                                            <h2 className="display-5">Serviced Apartments Töölö</h2>
                                            <p>Helsinki, Finland</p>
                                            <p>Forenom has everything from studios to four-bedroom apartments across the Nordic region, meaning you and your team can always find a home when you are traveling for work to Scandinavia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    




                </div>
            
                <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Caroref