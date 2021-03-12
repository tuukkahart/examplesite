
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos/dist/aos";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cont from "./components/Cont";

AOS.init();



function App() {
  return (
    
    <div>
      <Navbar />
      <Header />
      <Cont />
    </div>
  );
}


export default App;
