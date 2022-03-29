
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from './components/AboutPage/AboutPage';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Homepage from './components/HomePage/Homepage';
import {CartProvider} from "react-use-cart"

function App() {
  return (
    
      
    <div className="App">
      <CartProvider>
      <Router>
        <Navbar/>
         <Switch>
          <Route path="/">
            <Homepage/>
          </Route>
        <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/singleProduct">
            <SingleProduct />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
      </Switch> 
      <Footer/>
    </Router>
    </CartProvider>
    </div>
    
  );
}

export default App;
