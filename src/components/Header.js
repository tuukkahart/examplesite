import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


const Header = (props) => {
    return (
        
        <div>
            
            <div className="header min-vh-100 text-center d-flex flex-column justify-content-center" id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <img src="images/hotelnhome3.png" width="300" height="170"></img>
                            <h1>Feels like hotel</h1>
                            <h1>Feels like home</h1>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        
    )
}

export default Header
