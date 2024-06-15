// Importing useSelector and useDispatch from react-redux
import { useDispatch, useSelector } from "react-redux";

// Importing itemsActions from store
import { itemsActions } from "../store/itemsSlice";

// Sort component
const Sort = () => {
  // Using useDispatch for dispatching actions
  const dispatch = useDispatch();

  // Using useSelector for getting items from redux store
  const items = useSelector((store) => store.items);

  // function to handle sorting of items
  const handleSortClick = (event) => {
    const value = event.target.value;
    if (value === "recommended") {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((res) => {
          dispatch(itemsActions.addInitialItems(res));
        });
    } else if (value === "new") {
      const newSorted = [...items].sort(
        (a, b) => a.rating.count - b.rating.count
      );
      dispatch(itemsActions.addInitialItems(newSorted));
    } else if (value === "customerRating") {
      const ratingSorted = [...items].sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
      dispatch(itemsActions.addInitialItems(ratingSorted));
    } else if (value === "discount") {
      const discountSorted = [...items].sort((a, b) => b.price - a.price);
      dispatch(itemsActions.addInitialItems(discountSorted));
    } else if (value === "high") {
      const highSorted = [...items].sort((a, b) => b.price - a.price);
      dispatch(itemsActions.addInitialItems(highSorted));
    } else if (value === "low") {
      console.log("low");
      const sorted = [...items].sort((a, b) => a.price - b.price);
      dispatch(itemsActions.addInitialItems(sorted));
    }
  };
  return (
    <div className="sort_options">
      <div className="sort_left">Sort by:</div>
      <select
        className="sort_options_select"
        fdprocessedid="oxo1p"
        onChange={handleSortClick}
      >
        <option value="recommended" selected>
          Recommended
        </option>
        <option value="new">What's New</option>
        <option value="customerRating">Customer Rating</option>
        <option value="discount">Better Discount</option>
        <option value="high">Price: High to Low</option>
        <option value="low">Price: Low to High</option>
      </select>
    </div>
  );
};

// exporting Sort component
export default Sort;
