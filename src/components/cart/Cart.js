import { useSelector, useDispatch} from "react-redux";
import {  getCartList } from "../../redux/cartSlice";
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
          <p>Qnt.</p>
        </div>
        <div className="priceCont">
          <p>$</p>
        </div>
      </div>
      <button className="btnCancel">
        <img src={cancelIcon} alt="delete Icon" width="15px" height="15px" />
      </button>
    </div>

    {cartList.map((item) => (
      <CartItem book={item} key={item.id} />
    ))}
  </div>
);


}

export default Cart;