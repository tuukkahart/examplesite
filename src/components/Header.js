import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


const Header = (props) => {
    return (
        
        <div>
            
            <div class="header min-vh-100 text-center d-flex flex-column justify-content-center" id="header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                            <img src="images/hotelnhome3.png" width="400" height="200"></img>
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
