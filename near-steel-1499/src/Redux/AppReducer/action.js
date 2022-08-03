import * as types from "./actionTypes";
import axios from "axios";
export const getDataRequest = () => ({
  type: types.GET_DATA_REQUEST,
});
export const getDataSuccess = (payload) => ({
  type: types.GET_DATA_SUCCESS,
  payload,
});
export const getDataFailure = () => ({
  type: types.GET_DATA_FAILURE,
});

export const getCartData = () => (dispatch) => {
  dispatch({ type: types.GET_CARTDATA_REQUEST });
  axios
    .get("https://near1499server.herokuapp.com/cart")
    .then((r) =>
      dispatch({ type: types.GET_CARTDATA_SUCCESS, payload: r.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_CARTDATA_FAILURE, payload: err })
    );
};

export const addCartData = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_CARTDATA_REQUEST });
  axios
    .post("https://near1499server.herokuapp.com/cart", payload)
    .then((r) =>
      dispatch({ type: types.ADD_CARTDATA_SUCCESS, payload: r.data })
    )
    .catch((err) =>
      dispatch({ type: types.ADD_CARTDATA_FAILURE, payload: err })
    );
};

export const updateCartData = (id, newCount) => (dispatch) => {
  dispatch({ type: types.UPDATE_CARTDATA_REQUEST });
  axios
    .patch(`https://near1499server.herokuapp.com/cart/${id}`, {
      count: newCount,
    })
    .then((r) =>
      dispatch({ type: types.UPDATE_CARTDATA_SUCCESS, payload: r.data })
    )
    .catch((err) =>
      dispatch({ type: types.UPDATE_CARTDATA_FAILURE, payload: err })
    );
};

export const deleteCartItem = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CARTITEM_REQUEST });
  return axios
    .delete(`https://near1499server.herokuapp.com/cart/${id}`)
    .then((r) =>
      dispatch({ type: types.DELETE_CARTITEM_SUCCESS, payload: r.data })
    )
    .catch((e) =>
      dispatch({ type: types.DELETE_CARTITEM_FAILURE, payload: e })
    );
};

export const makeCartEmpty = () => (dispatch) => {
  dispatch({ type: types.EMPTY_CART_DATA });
};
