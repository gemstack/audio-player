import { configureStore } from "@reduxjs/toolkit";
import sagaMiddleware from "./rootSaga";
import reducer from "./rootReducer";
import { compose } from "redux";


const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
    
const store = configureStore({
  reducer,
  middleware: [composeEnhancers(sagaMiddleware)],
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
