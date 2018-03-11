import { combineReducers } from "redux";
import getRoute from "./getRoute";

const rootReducer = combineReducers({
  getRoute: getRoute
});

export default rootReducer;
