// Importing useEffect from react
import { useEffect } from "react";

// Importing useSelector and useDispatch from react-redux
import { useDispatch, useSelector } from "react-redux";

// Importing fetchStatusActions and itemsActions from store
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemsActions } from "../store/itemsSlice";

//Headless Component : Used for storing logic
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("https://fakestoreapi.com/products", { signal })
      .then((response) => response.json())
      .then((res) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(res));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
};

// exporting FetchItems component
export default FetchItems;
