import axios from "axios";
import { alert } from "./alert";
import {
  LOAD_USER,
  LOAD_FAILED,
  REGISTER,
  LOGIN,
  LOGOUT,
  UPDATE,
  DELETE_ME,
  REGISTER_DOCTOR,
  DELETE_DOCTOR
} from "./types";


// //load user
export const loadUser = () => async (dispatch) => {
  const config = {
    headers: {
      "auth-token": localStorage.getItem("myToken"),
    },
  };
  try {
    const res = await axios.get("https://medicamarzec.herokuapp.com/api/users/me", config);
    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_FAILED,
    });
  }
};

//register
export const register = ({
  name,
  lastname,
  email,
  password,
  type,
  birth,
  city,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = { name, lastname, email, password, type, birth, city };

  try {
    const res = await axios.post(
      "https://medicamarzec.herokuapp.com/api/patients",
      body,
      config
    );
    console.log(res.data);
    dispatch({
      type: REGISTER,
      payload: res.data,
    });
    dispatch(login(email, password));
    dispatch(loadUser());
  } catch (err) {
    console.log(err.response.data.errors);
    err.response.data.errors.map((err) => dispatch(alert(err.msg, "negative")));
  }
};

//Login
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "https://medicamarzec.herokuapp.com/api/users/login",
      body,
      config
    );
    dispatch({
      type: LOGIN,
      payload: res.data.token,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

//editData
export const editData = (name, lastname, date, city, password) => async (
  dispatch
) => {
  const config = {
    headers: {
      "auth-token": localStorage.getItem("myToken"),
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, lastname, date, city, password });
  try {
    const res = await axios.post(
      "https://medicamarzec.herokuapp.com/api/patients/update",
      body,
      config
    );
    dispatch({
      type: UPDATE,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
  }
};

//delete me
export const deleteMe = () => async (dispatch) => {
  const config = {
    headers: {
      "auth-token": localStorage.getItem("myToken"),
    },
  };

  try {
    await axios.delete("https://medicamarzec.herokuapp.com/api/patients/deleteme", config);
    dispatch({
      type: DELETE_ME,
    });
  } catch (err) {
    console.log(err);
  }
};

//registerDoctor
export const registerDoctor = ({
  name,
  lastname,
  email,
  password1: password,
  note,
  special,
  img
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("myToken"),
    },
  };
  const type = "doctor";

  special = special.replaceAll(" ", "");
  special = special.split(",");
  const body = { name, lastname, email, password, type, note, special,img };

  try {
    await axios.post("https://medicamarzec.herokuapp.com/api/doctors", body, config);
    
    dispatch({
      type: REGISTER_DOCTOR,
    });
    
  } catch (err) {
    console.log(err.response.data.errors);
    err.response.data.errors.map((err) => dispatch(alert(err.msg, "negative")));
  }
};

//delete doctor
export const deleteDoctor = (id) => async (dispatch) => {
  const config = {
    headers: {
      "auth-token": localStorage.getItem("myToken"),
    },
  };
  try {
    await axios.delete(
      `https://medicamarzec.herokuapp.com/api/users/delete/doctor/${id}`,
      config
    );

    dispatch({
      type: DELETE_DOCTOR,
    });
  } catch (err) {
    console.log(err);
  }
};
