/* eslint-disable no-unused-vars */
import { userConstants } from "../_constants";
import _ from "lodash";
const initialState = {
  loggedIn: false,
  user: "",
  access: "",
  timestamp: new Date().getTime(),
};
export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        access: action.user.token,
        user: action.user.user,
        timestamp: new Date().getTime(),
      };
    case userConstants.LOGIN_FAILURE:
      return initialState;
    case userConstants.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
