import React, { PureComponent } from 'react'

export class Footer extends PureComponent {
    render() {
        return (
            <div>
                <div class="container-fluid pb-0 mb-0 justify-content-center text-light  min-vh-100" data-aos="fade-left" id="contact">
                    <footer>
                        <div className="row my-5 justify-content-center py-5">
                            <div className="col-11">
                                <div className="row ">
                                    <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                        <h3>HotelHome</h3>
                                    </div>
                                    <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                        <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                        <ul className="list-unstyled">
                                            <li>Products</li>
                                            <li>About</li>
                                            <li>Projects</li>
                                            <li>Contact</li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                        <h6><b>ADDRESS</b></h6>
                                        <p className="mb-1">Støperigaten 7</p>
                                        <p>3040 Drammen</p>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                        <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-twitter" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-instagram" aria-hidden="true"></i></span> </p><small className="rights">2021 <span>&#174;</span> Copyright All Rights Reserved.</small>
                                    </div>
                                    <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                        <h6><b>TUUKKA HARTIKANEN</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true"></i></span> hartikainentuukka@gmail.com</small>
                                    </div>
                                    <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                        <h6><b>PLAADE HARTIKAINEN</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true"></i></span> martin.hotelhome.no</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>    
            
            </div>
            
        )
    }
}

export default Footer
