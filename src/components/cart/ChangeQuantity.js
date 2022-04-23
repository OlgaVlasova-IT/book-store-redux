import {  useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";


const ChangeQuantity = ({ id, amount, setAmount }) => {
  const dispatch = useDispatch();
  return (
    <div className="changeQ">
      <div className="quantity">
        <button
          className="btnQuantity"
          onClick={() => {
            if (amount >1) 
            setAmount(amount-1);
          }}
        >
          -
        </button>
        <p className="amount">{amount}</p>
        <button
          className="btnQuantity"
          onClick={() => {
            setAmount(amount+1);
          }}
        >
          +
        </button>
        </div>
        <div className="addToCart">
          <button
            className="btnAddToCart"
            onClick={() => {
              dispatch(addToCart({ id, amount }));
            }}
          >
            ADD TO CART
          </button>
        </div>
      
    </div>
  );
};
export default ChangeQuantity;
