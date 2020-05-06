import React from "react";
import routes from "../routes";
import { startSaga } from "./rootSaga";

const App = () => <React.Fragment>{routes}</React.Fragment>;

export default () => {
  startSaga();
  return <App />;
};
