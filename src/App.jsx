import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaNav from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Footer from "./assets/components/Footer";


function App() {
  return (
    <>
      <PizzaNav />
      <Home />
      <Footer/>
    </>
  );
}

export default App;
