import React, { PureComponent } from 'react'
import Carousel from './Carousel'
import CarouselProject from './CarouselProject'
import CarouselBusiness from './CarouselBusiness'




function cont(){
        return (
            <div className='container'>
                <div>
                    <div data-aos="fade-right" id="business">
                        <div className="container" >
                            <CarouselBusiness />
                        </div>
                    </div>

                    
                    <div className="productcolor" data-aos="fade-right" id="products">
                        
                        <div className="container">
                            <Carousel />
                        </div>
                        
                    </div>
                    
                    
                    <div className="productcolor" data-aos="fade-right" id="projects">
                        <div className="container">
                            
                            <CarouselProject />
                        </div>
                    </div>
                    <div className="container min-vh-100 d-flex flex-column justify-content-center" data-aos="fade-right" id="about1">
                        <h2 className="display-4 text-center">Story</h2>
                        <div className='container'>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid" src="/images/tj.jpeg" alt=""></img>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="p-5">
                                        
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

}

export default cont
