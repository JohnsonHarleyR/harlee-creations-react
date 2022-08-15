import { combineReducers } from "redux";
import { LayoutReducer as layout } from "../common/components/Layout/redux";
import { HomeReducer as home } from "../pages/Home/redux";

const rootReducer = combineReducers({
  layout,
  home,
});

export default rootReducer;