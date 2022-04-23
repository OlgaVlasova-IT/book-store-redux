
import { useDispatch } from "react-redux";

import { filterByAge, handleClearAll, sortLowToHigh, sortHighToLow, sortAtoZ , sortZtoA} from "../../redux/FilterSlice";


// function Filters({filterByAge, handleClearAll}) {
    
function Filters() {
const dispatch = useDispatch();
    return(
   <div>
 <div className="filterRootCont">
 <div className="filterCont">
 <button className="filterBtn" onClick={()=> {dispatch(filterByAge("0-2"))}} >Babies</button>
 <button className="filterBtn" onClick={()=> {dispatch(filterByAge("2-5"))}} >Toddlers</button>
 <button className="filterBtn" onClick={()=> {dispatch(filterByAge("5-8"))}} >Kids (5-8)</button>
 <button  className="filterBtn" onClick={()=> {dispatch(filterByAge("8-12"))}}>Kids (8-12)</button>
 <button className="filterBtn" onClick={()=> {dispatch(filterByAge("12+"))}} >Teens (12+)</button>
 <button className="filterBtn" onClick={()=> {dispatch(handleClearAll())}} >Clear All</button>
 </div>
        </div>
 
 <div className='booksCatalog'>
    
        <div className="sortCont"> 
         
          <button 
          className="btnSort"
          onClick={()=> {dispatch(sortLowToHigh())}}
          >Price: Low-High</button>
          <button className="btnSort"
          onClick={()=> {dispatch(sortHighToLow())}}
           >Price: High-Low</button>

         <button className="btnSort"
            onClick={()=> dispatch(sortAtoZ())}
           >Title: A-Z</button>
           <button className="btnSort"
            onClick={()=> dispatch(sortZtoA())}
           >Title: Z-A</button>
        </div> 
       
        </div>
        </div>
    )

}

export default  Filters;