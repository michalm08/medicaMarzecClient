import React, { useEffect } from "react";
//style
import "./sass/main.css";
//react-router
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Landing from "./components/layout/Landing";
import AboutUs from "./components/unLogged/AboutUs";
import Doctors from "./components/unLogged/Doctors";
import News from "./components/unLogged/News";
import Prices from "./components/unLogged/Prices";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PlainAnimate from "./components/plain/PlainAnimate";
import clientDashboard from "./components/dashboard/ClientDashboard";
import ClientEditData from "./components/client/ClientEditData";
import ClientFutureVisits from "./components/client/ClientFutureVisits";
import ClientPastVisits from "./components/client/ClientPastVisits";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import DoctorDashboard from "./components/dashboard/DoctorDashboard";
import DeleteDoctor from "./components/admin/DeleteDoctor";
import ChangeOpenHours from "./components/admin/ChangeOpenHours";
import FindPatient from "./components/admin/FindPatient";
import ChangePrices from "./components/admin/ChangePrices";
import AddDoctor from "./components/admin/AddDoctor";
import ChangePassword from "./components/doctor/ChangePassword";
import TodayMeetings from "./components/doctor/TodayMeetings";
import ConfirmDelete from "./components/admin/ConfirmDelete";
import AddService from "./components/admin/AddService";
import AddNews from "./components/admin/AddNews";
import ForgotPassword from "./components/unLogged/ForgotPassword";
import AddDiagnosis from "./components/doctor/AddDiagnosis";
import DeleteService from "./components/admin/DeleteService";
import AlertConfirm from "./components/layout/AlertConfirm";
import CancelVisit from "./components/client/CancelVisit";

// //redux
import { connect } from "react-redux";
import { loadUser } from "./actions/auth";
import Navbar from "./components/nav/Navbar";
import PatientRoute from "./components/routing/PatientRoute";
import UnloggedRoute from "./components/routing/UnloggedRoute";
import AdminRoute from "./components/routing/AdminRoute";
import DoctorRoute from "./components/routing/DoctorRoute";
import Form from "./components/admin/Form";

function App({ loadUser }) {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Navbar />
        <Switch>
          <UnloggedRoute exact path="/" component={Landing} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/doctors" component={Doctors} />
          <Route exact path="/news" component={News} />
          <Route exact path="/prices" component={Prices} />
          <UnloggedRoute exact path="/login" component={Login} />
          <UnloggedRoute exact path="/register" component={Register} />
          <Route exact path="/plainanimate" component={PlainAnimate} />
          <Route exact path="/clientEditData" component={ClientEditData} />
          <Route
            exact
            path="/clientFutureVisits"
            component={ClientFutureVisits}
          />
          <Route exact path="/clientPastVisits" component={ClientPastVisits} />

          <PatientRoute
            exact
            path="/clientDashboard"
            component={clientDashboard}
          />
          <DoctorRoute
            exact
            path="/clientDashboard/:id"
            component={clientDashboard}
          />
          <AdminRoute exact path="/adminDashboard" component={AdminDashboard} />
          <DoctorRoute
            exact
            path="/doctorDashboard"
            component={DoctorDashboard}
          />

          {/* <Route exact path="/clientDashboard" component={clientDashboard} />
          <Route exact path="/adminDashboard" component={AdminDashboard} />
          <Route exact path="/doctorDashboard" component={DoctorDashboard} /> */}

          <Route exact path="/addDoctor" component={AddDoctor} />
          <Route exact path="/deleteDoctor" component={DeleteDoctor} />
          <Route exact path="/changeOpenHours" component={ChangeOpenHours} />
          <Route exact path="/findPatient" component={FindPatient} />
          <Route exact path="/changePrices" component={ChangePrices} />
          <Route exact path="/todayMeetings" component={TodayMeetings} />
          <Route exact path="/changePassword" component={ChangePassword} />
          <Route exact path="/confirmDelete" component={ConfirmDelete} />
          <Route exact path="/addService" component={AddService} />
          <Route exact path="/addNews" component={AddNews} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/addDiagnosis" component={AddDiagnosis} />
          <Route exact path="/cancelVisit" component={CancelVisit} />
          <Route exact path="/deleteService" component={DeleteService} />
          <Route exact path="/alertConfirm" component={AlertConfirm} />
          <Route exact path="/form" component={Form} />
          

          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default connect(null, { loadUser })(App);
