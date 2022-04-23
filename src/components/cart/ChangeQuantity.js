import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { increment, decrement, getQuantity } from "../../redux/quantitySlice";

const ChangeQuantity = ({ id }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(getQuantity);
  return (
    <div className="changeQ">
      <div className="quantity">
        <button
          className="btnQuantity"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <p className="amount">{quantity}</p>
        <button
          className="btnQuantity"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        </div>
        <div className="addToCart">
          <button
            className="btnAddToCart"
            onClick={() => {
              dispatch(addToCart({ id, quantity }));
            }}
          >
            ADD TO CART
          </button>
        </div>
      
    </div>
  );
};
export default ChangeQuantity;
