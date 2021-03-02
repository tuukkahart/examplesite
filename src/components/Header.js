import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


const Header = (props) => {
    return (
        
        <div>
            
            <div class="header min-vh-100 text-center d-flex flex-column justify-content-center" id="header">
                <h1 class="display-4">Feels like hotel</h1>
                <h1 class="display-5">Feels like home</h1>
                <p><button type="button" class="btn btn-light btn-lg"><a color="black" href="https://spaces.chec.io/23570">Commerce.js Shop</a></button></p>
                <p><button type="button" class="btn btn-light btn-lg"><a color="black" href="https://hotelnhomestore3.vercel.app">Commerce.js Shop2</a></button></p>
            
                
            </div>
        </div>
        
        
    )
}

export default Header
