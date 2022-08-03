import { getLocalData } from "../../Utils/localStorage";
import {
  CHECK_REGISTER_USER_ERROR,
  CHECK_REGISTER_USER_REQUEST,
  CHECK_REGISTER_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "./actionTypes";
const initialState = {
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || "",
  isLoading: false,
  isError: false,
  userData: [],
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case REGISTER_USER_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case REGISTER_USER_ERROR: {
      return { ...state, isError: true, isLoading: false };
    }

    //checkuser
    case CHECK_REGISTER_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case CHECK_REGISTER_USER_SUCCESS: {
      return { ...state, isLoading: false, userData: payload };
    }
    case CHECK_REGISTER_USER_ERROR: {
      return { ...state, isError: true, isLoading: false };
    }

    //logout
    case LOGOUT_USER: {
      localStorage.removeItem("token");
      return { ...state, isLoading: false, token: "", isAuth: false };
    }

    default:
      return state;
  }
};
export { reducer };
