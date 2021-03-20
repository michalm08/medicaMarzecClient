import {
  REGISTER,
  LOGIN,
  LOAD_USER,
  LOGOUT,
  LOAD_FAILED,
  UPDATE,
  DELETE_ME,
  REGISTER_DOCTOR,
  DELETE_DOCTOR,
} from "../actions/types";

const initialState = {
  token: "",
  loading: true,
  user: {
    name: "",
    lastname: "",
    email: "",
    type: null,
    patient: { birth: "", city: "" },
  },
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return { ...state, user: action.payload };
    case LOGIN:
      localStorage.setItem("myToken", action.payload);
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    case LOAD_FAILED:
      return {
        ...state,
        loading: false,
      };
    case LOAD_USER:
      return {
        ...state,
        token: localStorage.getItem("myToken"),
        loading: false,
        user: action.payload,
      };
    case LOGOUT:
    case DELETE_ME:
      localStorage.removeItem("myToken");
      return {
        token: "",
        loading: false,
        user: { type: null },
      };
    case UPDATE:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_DOCTOR:
    case DELETE_DOCTOR:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default authReducer;
