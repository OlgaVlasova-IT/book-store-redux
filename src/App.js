import Home from './components/home/Home'
import Bestsellers from './components/bestsellers/BestSellers';
import './App.css';
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import {  getCartList } from "./redux/cartSlice";
import { useSelector } from 'react-redux';
import cartIcon from './icons/cart-shopping-solid.svg'




function App() {
  //show cart when click on cart icon
  const cartList = useSelector(getCartList)
 const showCart= ()=> {
  const x = document.getElementById('cart');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
 }
 
  return (
    <div>
      {/* <Cover/> */}
      <Router>
       <div>
        <nav className="navBar">
          <Link to="/" className="link">
            Home
          </Link>
          {/* <Link to="/Bestsellers" className="link">
            BestSellers
          </Link>
          <Link to="/Contact" className="link">
            Contact
          </Link> */}
         
          <div className="cartIconCont" onClick={()=>{showCart()}} >
          <p className="itemsInACart">{cartList.length}</p>
            <img  id ="cartIcon" src={cartIcon} width="50px" alt="cart icon"/></div>
        </nav>
        
        </div>
    
        <Routes>
          <Route path="/" element={
              <Home
              />
            }></Route>
            <Route path="/Bestsellers" element={
              <Bestsellers
              />
            }></Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
