// Importing itemsActions from redux store
import { itemsActions } from "../store/itemsSlice";

// Importing useRef from react
import { useRef } from "react";

// Importing useDispatch from react-redux
import { useDispatch } from "react-redux";

// Importing useLocation and useNavigate from react-router-dom
import { useLocation, useNavigate } from "react-router-dom";

// Importing Store from react-notifications-component
import { Store } from "react-notifications-component";

// CreateProduct Component
const CreateProduct = () => {
  // Using useDispatch for dispatching actions
  const dispatch = useDispatch();

  // Using useNavigate for page navigation
  const navigate = useNavigate();

  // Using useLocation for getting data
  const location = useLocation();
  const data = location.state;

  // Using useRef hook from storing input values
  const titleElement = useRef();
  const priceElement = useRef();
  const bodyElement = useRef();
  const categoryElement = useRef();
  const imageElement = useRef();

  // Function handleSubmit will be called when form is submitted
  const handleSubmit = (event) => {
    // To prevent default actions
    event.preventDefault();

    // Getting current values of useRef elements
    const productTitle = titleElement.current.value;
    const productPrice = priceElement.current.value;
    const postDescription = bodyElement.current.value;
    const productCategory = categoryElement.current.value;
    const productImage = imageElement.current.value;

    // Reset the values to empty string
    titleElement.current.value = "";
    priceElement.current.value = "";
    bodyElement.current.value = "";
    categoryElement.current.value = "";
    imageElement.current.value = "";

    // If data is present then edit the product
    if (data) {
      fetch(`https://fakestoreapi.com/products/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: productTitle,
          price: productPrice,
          description: postDescription,
          category: productCategory,
          image: productImage,
        }),
      })
        .then((res) => res.json())
        .then((item) => {
          dispatch(itemsActions.editItem(item));
          navigate("/");
          Store.addNotification({
            title: "Success!",
            message: "Product was edited successfully.",
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
        });
    }
    // If data is null then add the new product
    else {
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: productTitle,
          price: productPrice,
          description: postDescription,
          category: productCategory,
          image: productImage,
        }),
      })
        .then((res) => res.json())
        .then((item) => {
          dispatch(itemsActions.addItem(item));
          navigate("/");
          Store.addNotification({
            title: "Success!",
            message: "Product was added successfully.",
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
        });
    }
  };
  return (
    <>
      {data ? (
        <form className="create-post" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Product Title
            </label>
            <input
              type="text"
              ref={titleElement}
              placeholder="Enter product title"
              className="form-control"
              id="title"
              defaultValue={data.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Product Description
            </label>
            <textarea
              type="text"
              ref={bodyElement}
              rows="4"
              placeholder="Tell us more about it"
              className="form-control"
              id="body"
              defaultValue={data.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Product Image
            </label>
            <input
              type="url"
              placeholder="Enter image url (http://image.com)"
              ref={imageElement}
              className="form-control"
              id="image"
              defaultValue={data.image}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              ref={priceElement}
              className="form-control"
              id="price"
              defaultValue={data.price}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Product Category
            </label>
            <input
              type="text"
              placeholder="Enter category"
              ref={categoryElement}
              className="form-control"
              id="category"
              defaultValue={data.category}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </form>
      ) : (
        <form className="create-product" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Product Title
            </label>
            <input
              type="text"
              ref={titleElement}
              placeholder="Enter product title"
              className="form-control"
              id="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Product Description
            </label>
            <textarea
              type="text"
              ref={bodyElement}
              rows="4"
              placeholder="Tell us more about it"
              className="form-control"
              id="body"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Product Image
            </label>
            <input
              type="url"
              placeholder="Enter image url (http://image.com)"
              ref={imageElement}
              className="form-control"
              id="image"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              ref={priceElement}
              className="form-control"
              id="price"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Product Category
            </label>
            <input
              type="text"
              placeholder="Enter category"
              ref={categoryElement}
              className="form-control"
              id="category"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      )}
    </>
  );
};

export default CreateProduct;
