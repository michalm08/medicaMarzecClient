import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as uuidv4 } from "uuid";

export const alert = (value, kind) => (dispatch) => {
  const id = uuidv4();
  console.log('w alercie')
  dispatch({
    type: SET_ALERT,
    payload: { value, kind, id },
  });
  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: { value, kind, id },
      }),
    1500
  );
};
