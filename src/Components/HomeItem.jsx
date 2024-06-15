// Importing useSelector and useDispatch from react-redux
import { useDispatch, useSelector } from "react-redux";

// Importing bagActions and detailActions from store
import { bagActions } from "../store/bagSlice";
import { detailActions } from "../store/detailSlice";
import { itemsActions } from "../store/itemsSlice";

// Importing Link from react-router-dom
import { Link, useNavigate } from "react-router-dom";

// Importing icons from react-icons
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

// Importing Store from react-notifications-component
import { Store } from "react-notifications-component";

// HomeItem component
const HomeItem = ({ item }) => {
  // Using useSelector for getting bagItemsId from redux store
  const bagItemsId = useSelector((store) => store.bag);

  // Using useNavigate for page navigation
  const navigate = useNavigate();

  // Using useDispatch for dispatching actions
  const dispatch = useDispatch();

  // check if item is present in bag or not
  const isItemPresent = () => {
    return bagItemsId.some((id) => id === item.id);
  };

  // function to handle Add button for adding item in bag
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
    Store.addNotification({
      title: "Success!",
      message: "Added to cart",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  };

  // function to handle Remove button for removing item from bag
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
    Store.addNotification({
      title: "Success!",
      message: "Removed from cart",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  };

  // function to handle show item details
  const handleShowDetails = () => {
    dispatch(detailActions.showDetails(item.id));
  };

  // function to edit item
  const handleEdit = () => {
    navigate("/addProduct", {
      state: {
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
        price: item.price,
        category: item.category,
      },
    });
  };

  // function to delete item
  const handleDelete = () => {
    dispatch(itemsActions.deleteItem(item));
    dispatch(bagActions.removeFromBag(item.id));
    Store.addNotification({
      title: "Success!",
      message: "Product was deleted successfully.",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };

  return (
    <div className="item-container">
      <div className="image-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="update-btn">
          <span
            className="badge rounded-pill bg-danger fs-5"
            onClick={handleDelete}
          >
            <MdDelete />
          </span>
          <span
            className="badge rounded-pill bg-warning fs-5 ms-2"
            onClick={handleEdit}
          >
            <FaEdit />
          </span>
        </div>
      </div>
      {item.rating ? (
        <div className="rating">
          {item.rating.rate} ⭐ | {item.rating.count}
        </div>
      ) : (
        <div className="rating">
          {4} ⭐ | {300}
        </div>
      )}
      <Link to="/details" onClick={handleShowDetails} className="detailLink">
        <div className="company-name">{item.title}</div>
      </Link>
      <div className="price">
        <span className="current-price">Rs {item.price}</span>
      </div>

      {isItemPresent() ? (
        <button className="btn btn-add-bag btn-danger" onClick={handleRemove}>
          Remove
        </button>
      ) : (
        <button
          className=" btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};

// exporting HomeItem component
export default HomeItem;
