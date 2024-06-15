// Importing useSelector from react-redux
import { useSelector } from "react-redux";

// BagSummary component
const BagSummary = () => {
  // Using useSelector for getting bag and items from redux store
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  // Getting actual bag items from items and bag array
  const bagItems = items.filter((item) => {
    const isPresent = bag.some((id) => id === item.id);
    return isPresent;
  });

  // Payment details/calculation
  const CONVENIENCE_FEES = 99;
  let totalItem = bag.length;
  let totalMRP = 0;

  bagItems.forEach((bagItem) => {
    totalMRP += parseFloat(bagItem.price);
  });

  let finalPayment = 0;
  if (totalItem !== 0) {
    finalPayment = totalMRP + CONVENIENCE_FEES;
  }

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

// exporting BagSummary component
export default BagSummary;
