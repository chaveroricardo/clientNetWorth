import { combineReducers } from "redux";


import sidebar from "./sidebarReducers";
import layout from "./layoutReducer";
import theme from "./themeReducer";


import { reducer as toastr } from "react-redux-toastr";
import { reducer as formReducer } from 'redux-form';




export default combineReducers({
  sidebar,
  layout,
  theme,
  toastr,
  formReducer
});
