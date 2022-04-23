import BookCard from "./BookCard";
import Filters from "../filter/Filters";
import { getBooks } from "../../redux/FilterSlice";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";




function Home() {
  const booksArr = useSelector(getBooks);
  return (
    <div className="App">
      <div className="headingCont">
        <h4>Explore our selection of {booksArr.length} books</h4>
      </div>
      <Filters />
      <div className="books">
        {booksArr.map((book) => (
          <BookCard book={book} id={book.id} key={book.id} />
        ))}
      </div>
      
      <div id= "cart"className="cart">
        <Cart />
      </div>
    </div>

  );
}
export default Home;
