import React, { PureComponent } from 'react'
import Carousel from './Carousel'
import CarouselProject from './CarouselProject'
import CarouselBusiness from './CarouselBusiness'
import Slider from './Slider'
import Slider2 from './Slider2'
import Caronew from './Caronew'
import Caroref from './Caroref'




function cont(){
        return (
            <div>
                <div>
                    
                    <div data-aos="fade-right" id="business">
                        <div>
                            <Slider2 />
                        </div>
                    </div>

                    
                    <div data-aos="fade-right" id="products">
                        
                        <div>
                            <Caronew />
                        </div>
                        
                    </div>
                    
                    
                    <div data-aos="fade-right" id="projects">
                        <div>
                            <Caroref />
                        </div>
                    </div>
                    <div className="container min-vh-100 d-flex flex-column justify-content-center" data-aos="fade-right" id="about1">
                        <h2 className="display-4 text-center">Story</h2>
                        <div className='container'>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-5 order-lg-2">
                                    <div className="p-5">
                                        <img className="img-fluid" src="images/tj.jpeg" alt=""></img>
                                    </div>
                                </div>
                                <div className="col-lg-7 order-lg-1">
                                    <div className="p-5">
                                      <p>At first, there was a man and an idea of allowing for a quality sleeping experience for everyone. Every night should feel like hotel and every day elsewhere should feel like home. Together with customers (the largest hotel operators in Scandinavia), carefully selected factories and talented Nordic designers we made it. The company HotelHome was born.</p>

                                          <p>Jump aboard, the journey has begun.</p>

                                          <p>Take contact,</p>
                                          <p>Martin Carlsson, CEO</p>
                                    
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
