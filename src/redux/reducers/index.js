import { combineReducers } from "redux";


import sidebar from "./sidebarReducers";
import layout from "./layoutReducer";
import theme from "./themeReducer";


import { reducer as toastr } from "react-redux-toastr";
import { reducer as formReducer } from 'redux-form';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';



export default combineReducers({
  sidebar,
  layout,
  theme,
  toastr,
  formReducer,
  authentication,
  registration,
  users
});
