import { userConstants } from "../_constants";
import _ from "lodash";
const initialState = {
  loggedIn: false,
  user: "",
  access: "",
  refresh: "",
  timestamp: new Date().getTime(),
};
export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        access: action.user.access,
        refresh: action.user.refresh,
        user: _.omit(action.user, ["access", "refresh"]),
        timestamp: new Date().getTime(),
      };
    case userConstants.PATCH_PROFILE_PIC_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user.profile,
            profile_photo: action.profile_pic.profile_photo
          }
        },
      };
    case userConstants.PATCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.user.email,
          first_name: action.user.first_name,
          last_name: action.user.last_name
        },
      };
    case userConstants.PATCH_COMPANY_OBJECT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user.profile,
            company: action.company
          }
        },
      };
    case userConstants.PATCH_USER_PROFILE_OBJECT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profile: action.profile,
        },
      };
    case userConstants.PATCH_COMPANY_ARUP_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profile: action.profile,
        },
      };
    case userConstants.PATCH_COMPANY_LOGO_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user.profile,
            company: {
              ...state.user.profile.company,
              company_logo: action.logo.company_logo
            }
          }
        },
      };
    case userConstants.PATCH_OTHER_PROFILE_FIELDS:
      return {
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user.profile,
            job_title: action.profile.job_title
          }
        },
      };
    case userConstants.PATCH_COMPANY_UPDATE_OBJECT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user.profile,
            company: action.company
          }
        },
      };
    case userConstants.LOGIN_FAILURE:
      return initialState;
    case userConstants.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
