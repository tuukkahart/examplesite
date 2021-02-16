import $ from "jquery";
import Popper from 'popper.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos/dist/aos";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer"; 

AOS.init();



function App() {
  return (
    <>
      <Navbar /> 
      <Header />
      <Container />
      <Footer />
    </>
  );
}


export default App;
