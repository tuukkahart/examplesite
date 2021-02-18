import React, { PureComponent } from 'react'

export class Footer extends PureComponent {
    render() {
        return (
            <div className="container min-vh-100">
                <p>

                </p>
                <p>

                </p>
                <p>

                </p>
                <p>

                </p>
                <p>
                    
                </p>
                <section className="mb-4 d-flex flex-column h-100 align-items-center justify-content-center" id='contact'>

                
                    <h2 className="h1-responsive font-weight-bold text-center my-4 justify-content-center">Contact us</h2>
                    
                    <p className="text-center w-responsive mx-auto mb-5">Can we help you? Please do not hesitate to contact us directly.</p>

                    <div className="row">

                    
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            
                                <div className="row">

                                    
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="name" name="name" className="form-control"></input>
                                            <label for="name" className="">Your name</label>
                                        </div>
                                    </div>
                                
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="email" name="email" className="form-control"></input>
                                            <label for="email" className="">Your email</label>
                                        </div>
                                    </div>
                                

                                </div>
                            
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input type="text" id="subject" name="subject" className="form-control"></input>
                                            <label for="subject" className="">Subject</label>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="row">

                                
                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                            <label for="message">Your message</label>
                                        </div>

                                    </div>
                                </div>
                            

                            </form>

                            <div className="text-center text-md-left">
                                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                            </div>
                            <div className="status"></div>
                        </div>
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Stoperigaten 7</p>
                                    <p>3040 Drammen, Norway</p>
                                </li>

                                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p>(+47) 948 47 654</p>
                                </li>

                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>martin@hotelhome.com</p>
                                </li>
                            </ul>
                        </div>
                    

                    </div>

                </section>
            </div>
            
        )
    }
}

export default Footer
