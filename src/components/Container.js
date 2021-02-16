import React, { PureComponent } from 'react'
import Carousel from './Carousel'
import CarouselProject from './CarouselProject'
import CarouselBusiness from './CarouselBusiness'




export class container extends PureComponent {
    render() {
        return (
            <div>
                <div>
                    <div data-aos="fade-left" id="business">
                        <div className="container" >
                            <CarouselBusiness />
                        </div>
                    </div>

                    
                    <div className="productcolor" data-aos="fade-right" id="products">
                        
                        <div className="container d-flex align-items-center justify-content-center">
                            <Carousel />
                        </div>
                        
                    </div>
                    
                    
                    <div className="productcolor" data-aos="fade-left" id="projects">
                        <div className="container">
                            
                            <CarouselProject />
                        </div>
                    </div>
                    <div className="container min-vh-100 d-flex flex-column justify-content-center" data-aos="fade-left" id="about1">
                        <h2 className="display-4 text-center">Story</h2>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-5 order-lg-2">
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
        )
    }
}

export default container
