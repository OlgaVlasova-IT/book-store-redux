import { useState } from "react";
import { useDispatch } from "react-redux"

import ChangeQuantity from "../cart/ChangeQuantity";
const BookCardDetails = ({image, price, author,bookname, searchTerm, id}) =>{
const dispatch = useDispatch();
const [ amount, setAmount] =useState(1)
 return(
    <div className="upperBlock" key={id}>
    <div className="imgCont">
      <img src={image} width="200px" alt="baby book cover" />
    </div>
    <div className="detailsCont">
      <h3>{bookname}</h3>
      <p>
        {" "}
        by <span className="author">{author}</span>
      </p>
      <p>
        category:<span className="author">{searchTerm}</span>
      </p>
      <ChangeQuantity  id ={id}/>
      <p className="price"> ${price}</p>
      {/* <button>Like</button> */}
     
    
    </div>
  </div>


 )


}

export default BookCardDetails