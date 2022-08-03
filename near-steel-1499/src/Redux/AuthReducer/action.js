import {
  CHECK_REGISTER_USER_ERROR,
  CHECK_REGISTER_USER_REQUEST,
  CHECK_REGISTER_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const regiterUser = (payload) => (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });
  return axios
    .post(`https://near1499server.herokuapp.com/users`, payload)
    .then((r) => dispatch({ type: REGISTER_USER_SUCCESS, payload: r }))
    .catch((err) => dispatch({ type: REGISTER_USER_ERROR, payload: err }));
};

export const checkUser = () => (dispatch) => {
  dispatch({ type: CHECK_REGISTER_USER_REQUEST });
  return axios
    .get(`https://near1499server.herokuapp.com/users`)
    .then((r) =>
      dispatch({ type: CHECK_REGISTER_USER_SUCCESS, payload: r.data })
    )
    .catch((err) =>
      dispatch({ type: CHECK_REGISTER_USER_ERROR, payload: err })
    );
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};
