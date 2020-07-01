import React from "react";
import BuddyMeter from "./containers";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
      <Provider store={store}>
        <BuddyMeter />
      </Provider>
    );
}

export default App;