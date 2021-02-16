import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


const Header = (props) => {
    return (
        
        <div>
            <div class="jumbotron min-vh-100 text-center d-flex flex-column justify-content-center" id="header">
                <h1 class="display-4">Feels like hotel</h1>
                <h1 class="display-5">Feels like home</h1>
                    <a class="btn btn-white btn-lg" href="#" role="button">Shop</a>
            </div>
            
        </div>
        
        
    )
}

export default Header
