import UserActionTypes from "./user.types";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_REGISTER_REQUEST:
      return { loading: true };
    case UserActionTypes.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserActionTypes.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case UserActionTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userLoginReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_REQUEST:
      return { loading: true };
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserActionTypes.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case UserActionTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userFacebookLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_FACEBOOK_LOGIN_REQUEST:
      return { loading: true };
    case UserActionTypes.USER_FACEBOOK_LOGIN_SUCCESS:
      return { loading: false };
    case UserActionTypes.USER_FACEBOOK_LOGIN_FAIL:
      return { loading: false };
    case UserActionTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userGoogleLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_GOOGLE_LOGIN_REQUEST:
      return { loading: true };
    case UserActionTypes.USER_GOOGLE_LOGIN_SUCCESS:
      return { loading: false };
    case UserActionTypes.USER_GOOGLE_LOGIN_FAIL:
      return { loading: false };
    case UserActionTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userGithubLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_GITHUB_LOGIN_REQUEST:
      return { loading: true };
    case UserActionTypes.USER_GITHUB_LOGIN_SUCCESS:
      return { loading: false };
    case UserActionTypes.USER_GITHUB_LOGIN_FAIL:
      return { loading: false };
    case UserActionTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
