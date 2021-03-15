import React, { PureComponent } from 'react'
import Slider2 from './Slider2'
import Caronew from './Caronew'
import Caroref from './Caroref'




function cont(){
        return (
            <div>
                <div>
                    
                    <div id="business">
                        <div>
                            <Slider2 />
                        </div>
                    </div>

                    
                    <div id="products">
                        
                        <div>
                            <Caronew />
                        </div>
                        
                    </div>
                    
                    
                    <div id="projects">
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
                                      <p>At first, there was a man with an idea of allowing for a quality sleeping experience for everyone. Every night should feel like hotel and every day elsewhere should feel like home. Together with customers (the largest hotel operators in Scandinavia), carefully selected factories and talented Nordic designers we made it. The company HotelHome was born.</p>

                                          <p>Jump aboard, the journey has begun.</p>
                                          <p>Martin Carlsson, Owner</p>

                                          <h1>Take contact:</h1>
                                          
                                          <p>Email: martin@hotelnhome.com</p>
                                          <p>Phone: (+47) 948 47 654</p>
                                    
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
