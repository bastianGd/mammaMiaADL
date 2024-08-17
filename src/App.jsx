import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaNav from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Footer from "./assets/components/Footer";
import Register from "./assets/components/Register";
import Login from "./assets/components/Login";

function App() {
  return (
    <>
      <div className="app-container">
        <PizzaNav />
        <div className="content-wrapper">
          {/* <Home /> */}
         {/*  <Register /> */}
         <Login />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
