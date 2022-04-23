import { useSelector, useDispatch} from "react-redux";
import {  emptyCart, getCartList } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import cancelIcon from '../../icons/cancel.png'


const Cart = ()=> {
const cartList = useSelector(getCartList)
const dispatch = useDispatch()
return (
  <div>
    <h3 style={{ padding: 10 }}> Shopping Cart</h3>
    <div className="liCont">
      <p>book</p>

      <div className="additionalCont">
        <div className="titleCont">
          <p>Name</p>
          <p>Q.</p>
        </div>
        <div className="priceCont">
          <p>$</p>
        </div>
      </div>
      <button className="btnCancel" onClick={()=>{dispatch(emptyCart())}}>
        <img src={cancelIcon} alt="delete Icon" width="15px" height="15px" />
      </button>
    </div>

    {cartList.map((item) => (
      <CartItem book={item} key={item.id} />
    ))}

    <div className="totalCont">
      <h3>Total:     ${cartList.reduce( (sum, cur) => sum + cur.price, 0).toFixed(2)}</h3>
    </div>
  </div>
);


}

export default Cart;