import { setData } from "../redux/stateSlice/dataSlicer";
import axios from "axios";
import { Map } from "immutable";
import store from "../redux/store/store";

export const getData = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  let immutable = res.data.map((item) => Map(item));
  store.dispatch(setData(immutable));
};
