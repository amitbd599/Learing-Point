import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Inner from "./components/Inner";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Inner />
      </div>
    </Provider>
  );
};

export default App;
