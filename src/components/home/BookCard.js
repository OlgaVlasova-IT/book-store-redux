
import { useDispatch, useSelector } from "react-redux"
import { getShowMore, handleShowMore } from "../../redux/ShowMoreSlice"
import BookCardDetails from "./BookCardDetails"


function BookCard({book}) {
const {id, image, bookname, author, searchTerm, price, desc} = book
const dispatch= useDispatch()
const showMore = useSelector(getShowMore)

    return (
      <div key={id} className="card">
       <BookCardDetails image ={image} bookname={bookname} author ={author} price={price} searchTerm={searchTerm} id={id} />
        <div className="descCont">
          <p className="desc">
            {showMore[id - 1] ? desc : desc.substring(0, 100) + "..."}
            <button
              className="showMoreBtn"
              onClick={() => {
                dispatch(handleShowMore(id));
              }}
            >
              {showMore[id - 1] ? "Show Less" : "Show More"}
            </button>
          </p>
        </div>
      </div>
    );}

    export default BookCard