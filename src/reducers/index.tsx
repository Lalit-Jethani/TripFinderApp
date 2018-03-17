import { combineReducers } from "redux";
import getRoute from "./getRoute";
import GetDeals from "./getDeals";

const rootReducer = combineReducers({
  getRoute: getRoute,
  getDeals:GetDeals
});

export default rootReducer;
