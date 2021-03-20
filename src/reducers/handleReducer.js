import {
  SHOW_PATIENTS,
  SHOW_PATIENT,
  SHOW_DOCTORS,
  TAKE_OPEN_HOURS,
  SHOW_SERVICE,
  CHANGE_OPEN_HOURS,
  CREATE_NEWS,
  SHOW_NEWS,
  DELETE_NEWS,
  UPDATE_SERVICE,
  ADD_SERVICE,
  DELETE_SERVICE,
} from "../actions/types";

const initialState = {
  patients: [],

  onePatient: { name: "", lastname: "", patient: { birth: "", city: "" } },
};
// const initialState = { patients: {onePatient: {name:'',lastname:'',patient:{birth:'',city:''}}} };

function handleReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_PATIENTS:
      return { ...state, patients: action.payload };
    case SHOW_PATIENT:
      return { ...state, onePatient: action.payload };
    case SHOW_DOCTORS:
      return { ...state, doctors: action.payload };
    case TAKE_OPEN_HOURS:
      return { ...state, hours: action.payload };
    case SHOW_NEWS:
      return { ...state, news: action.payload };
    case SHOW_SERVICE:
      return { ...state, prices: action.payload };
    case CHANGE_OPEN_HOURS:
    case CREATE_NEWS:
    case DELETE_NEWS:
    case UPDATE_SERVICE:
    case ADD_SERVICE:
    case DELETE_SERVICE:
      return { ...state };
    default:
      return state;
  }
}
export default handleReducer;
