import axios from "axios";
// import { alert } from "./alert";
import {
  SHOW_PATIENTS,
  SHOW_PATIENT,
  SHOW_DOCTORS,
  CHANGE_OPEN_HOURS,
  TAKE_OPEN_HOURS,
  CREATE_NEWS,
  SHOW_NEWS,
  DELETE_NEWS,
  SHOW_SERVICE,
  UPDATE_SERVICE,
  ADD_SERVICE,
  DELETE_SERVICE,
} from "./types";

export const patientsAction = () => async (dispatch) => {
  const config = {
    headers: {
      "auth-token": localStorage.getItem("myToken"),
    },
  };
  try {
    const res = await axios.get(
      "https://medicamarzec.herokuapp.com/api/patients/all",
      config
    );
    dispatch({
      type: SHOW_PATIENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const onePatientAction = (id) => async (dispatch) => {
  const config = {
    headers: {
      "auth-token": localStorage.getItem("myToken"),
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      `https://medicamarzec.herokuapp.com/api/users/${id}`,
      config
    );
    dispatch({
      type: SHOW_PATIENT,
      payload: res.data,
    });
    console.log("dzien dobry 2");
  } catch (err) {
    console.log(err);
  }
};

export const showDoctors = () => async (dispatch) => {
  try {
    const res = await axios.get("https://medicamarzec.herokuapp.com/api/doctors");
    dispatch({
      type: SHOW_DOCTORS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const changeOpenHours = (hours) => async (dispatch) => {
  const config = {
    headers: {
      "auth-token": localStorage.getItem("myToken"),
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(hours);
  console.log(body);
  try {
    await axios.put("https://medicamarzec.herokuapp.com/api/clinic/openhours", body, config);

    dispatch({
      type: CHANGE_OPEN_HOURS,
    });
  } catch (err) {
    console.log(err);
  }
};

export const takeOpenHours = () => async (dispatch) => {
  try {
    const res = await axios.get("https://medicamarzec.herokuapp.com/api/clinic/openhours");
    dispatch({
      type: TAKE_OPEN_HOURS,
      payload: res.data[0],
    });
  } catch (err) {
    console.log(err);
  }
};

export const createNews = (data) => async (dispatch) => {
  const config = {
    headers: {
      "auth-token": localStorage.getItem("myToken"),
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(data);

  try {
    await axios.post("https://medicamarzec.herokuapp.com/api/clinic/news", body, config);
    dispatch({
      type: CREATE_NEWS,
    });
  } catch (err) {
    console.log(err);
  }
};

export const showNews = () => async (dispatch) => {
  console.log("dziala show");
  try {
    const res = await axios.get("https://medicamarzec.herokuapp.com/api/clinic/news");
    console.log(res.data);
    dispatch({
      type: SHOW_NEWS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteNews = (id) => async (dispatch) => {
  const config = {
    headers: {
      "auth-token": localStorage.getItem("myToken"),
    },
  };
  try {
    await axios.delete(`https://medicamarzec.herokuapp.com/api/clinic/news/${id}`, config);
    dispatch({
      type: DELETE_NEWS,
    });
  } catch (err) {
    console.log(err);
  }
};

export const showPrices = () => async (dispatch) => {
  try {
    const res = await axios.get("https://medicamarzec.herokuapp.com/api/clinic/services");
    dispatch({
      type: SHOW_SERVICE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePrices = (data) => async (dispatch) => {
  const config = {
    headers: {
      "auth-token": localStorage.getItem("myToken"),
      "COntent-Type": "application/json",
    },
  };
  const body = JSON.stringify(data);
  try {
    await axios.put("https://medicamarzec.herokuapp.com/api/clinic/services", body, config);
    dispatch({
      type: UPDATE_SERVICE,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addService = (data) => async (dispatch) => {
  const config = {
    headers: {
      "auth-token": localStorage.getItem("myToken"),
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(data);
  try {
    await axios.post("https://medicamarzec.herokuapp.com/api/clinic/services", body, config);
    dispatch({
      type: ADD_SERVICE,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteService = (id) => async (dispatch) => {
  console.log("dziala delete");
  console.log(id);
  const config = {
    headers: {
      "auth-token": localStorage.getItem("myToken"),
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.delete(
      `https://medicamarzec.herokuapp.com/api/clinic/services/${id}`,
      config
    );
    dispatch({
      type: DELETE_SERVICE,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addImage = (data) => async (dispatch) => {
  console.log("dziala addImage");
  console.log(data);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // const body = JSON.stringify({note:data});
  const body = JSON.stringify(data);
  console.log(body);
  try {
    const res = await axios.post(
      `https://medicamarzec.herokuapp.com/api/doctors/photo`,
      body,
      config
    );
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
