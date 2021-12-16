import axios from "axios";
import UserActionTypes from "./user.types";

export const register = (inputData) => async (dispatch) => {
  try {
    dispatch({ type: UserActionTypes.USER_REGISTER_REQUEST });
    const graphqlQuery = {
      query: `
        mutation {
          createUser(inputData: {name: "${inputData.name}", email: "${inputData.email}", password: "${inputData.password}"}) {
            _id
            name
            email
						password
            isAdmin
            token
          }
        }
      `,
    };

    const {
      data: {
        data: { createUser },
      },
    } = await axios({
      url: "http://localhost:5000/graphql",
      headers: { "Content-Type": "Application/json" },
      method: "POST",
      data: graphqlQuery,
    });

    dispatch({
      type: UserActionTypes.USER_REGISTER_SUCCESS,
      payload: createUser,
    });

    dispatch({
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: createUser,
    });

    localStorage.setItem("userDetails", JSON.stringify(createUser));
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: UserActionTypes.USER_LOGIN_REQUEST });

    const graphqlQuery = {
      query: `{
        login(email: "${email}", password:"${password}") {
          _id
          name
          email
          isAdmin
          token
        }
      }`,
    };

    const {
      data: {
        data: { login },
      },
    } = await axios({
      url: "http://localhost:5000/graphql",
      headers: { "Content-Type": "Application/json" },
      method: "POST",
      data: graphqlQuery,
    });

    dispatch({
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: login,
    });

    localStorage.setItem("userDetails", JSON.stringify(login));
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const facebookLogin = () => async (dispatch) => {
  try {
    dispatch({ type: UserActionTypes.USER_FACEBOOK_LOGIN_REQUEST });

    const {
      data: { user },
    } = await axios({
      url: "http://localhost:5000/auth/login/success",
      method: "GET",
      headers: { "Content-Type": "Application/json" },
      withCredentials: true,
    });

    // console.log(user);

    dispatch({
      type: UserActionTypes.USER_FACEBOOK_LOGIN_SUCCESS,
    });

    dispatch({
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: user,
    });

    localStorage.setItem("userDetails", JSON.stringify(user));
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_FACEBOOK_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const googleLogin = () => async (dispatch) => {
  try {
    dispatch({ type: UserActionTypes.USER_GOOGLE_LOGIN_REQUEST });

    const {
      data: { user },
    } = await axios({
      url: "http://localhost:5000/auth/login/success",
      method: "GET",
      headers: { "Content-Type": "Application/json" },
      withCredentials: true,
    });

    console.log(user);

    dispatch({
      type: UserActionTypes.USER_GOOGLE_LOGIN_SUCCESS,
    });

    dispatch({
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: user,
    });

    localStorage.setItem("userDetails", JSON.stringify(user));
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_GOOGLE_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userDetails");
  dispatch({ type: UserActionTypes.USER_LOGOUT });
};
