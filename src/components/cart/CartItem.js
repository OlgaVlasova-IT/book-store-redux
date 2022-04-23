import cancelIcon from '../../icons/cancel.png'
import { useSelector, useDispatch} from "react-redux";
import { deleteItem } from '../../redux/cartSlice';

const CartItem = ({book}) => {
    const dispatch = useDispatch()
    const {id, bookname, image, quantity, price,} = book;
return(<div>
     <div key={id}>
    
        <div>
        <div className='liCont'>
        <img src={image} alt="book cover" width="48px" height="auto"></img>
        <div className='additionalCont'>
        <div className="titleCont">
          <p>{bookname.length <20 ?  bookname : bookname.substring(0, 20) + "..." }</p>
           <p>{quantity}</p>
        </div>
        <div className="priceCont">
        <p>${price}</p>
        </div>
        </div>
        <button className="btnCancel" 
        onClick={()=>{dispatch(deleteItem({id}))}}
        >
            <img src={cancelIcon} alt="delete Icon" width="15px" height="15px"/></button>
    </div>
   
    </div>
</div></div>


)

    }


export default CartItem