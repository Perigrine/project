import logo from "./logo.svg";
import "./App.css";

import React, { useEffect } from "react";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { SideBar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Setting";
import { MyStore } from "./pages/MyStore";
import { Revenue } from "./pages/Revenue";
import { Integraions } from "./pages/Integrations";
import { SignIn } from "./pages/SignIn";
import { store } from "./Store";
import { Footer } from "./components/Footer";
import { Link } from "./pages/Link";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { LOGOUT } from "./actions/types";

//Redux
import { Provider } from "react-redux";
import Rstore from "./ReduxStore";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

function App() {
  const [header, setHeader] = store.useState("Header");
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    Rstore.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) Rstore.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <div>
      <Provider store={Rstore}>
        <Router>
          <Routes>
            <Route exact path="" element={<Navigate to="/login" replace />} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/dashboard" Component={Dashboard}>
              <Route path="/dashboard" element={<Home />}></Route>
              <Route path="/dashboard/home" element={<Home />}></Route>
              <Route path="/dashboard/mystore" element={<MyStore />}></Route>
              <Route path="/dashboard/revenue" element={<Revenue />}></Route>
              <Route
                path="/dashboard/integrations"
                element={<Integraions />}
              ></Route>
              <Route path="/dashboard/settings" element={<Settings />}></Route>
              <Route path="/dashboard/signin" element={<SignIn />}></Route>
              <Route path="/dashboard/link" element={<Link />}></Route>
              <Route path="*" element={<Navigate to="/home" replace />}></Route>
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
