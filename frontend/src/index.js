import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Store from "./store.js";
import { Provider } from "react-redux";
import Dashboard from "./scanes/Dashboard/Dashboard.jsx";
import Login from "./scanes/Login/Login.jsx";
import Siswa from "./scanes/Siswa/siswaScreen.jsx";
import Guru from "./scanes/Guru/guruScreen.jsx";
import GuruCreate from "./scanes/Guru/guruCreate.jsx";
import GuruDetail from "./scanes/Guru/guruDetail.jsx";
import PrivateRoute from "./components/privateRoute.jsx";
import SiswaDetail from "./scanes/Siswa/siswaDetail.jsx";
import Profile from "./scanes/Profile/Profile.jsx";
import CalonSiswa from "./scanes/CalonSiswa/calonSiswaScreen.jsx";
import CalonSiswaDetail from "./scanes/CalonSiswa/calonSiswaDetail.jsx";
import Ppdb from "./scanes/ppdb/ppdb.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Login />} />
      <Route index={true} path="/ppdb" element={<Ppdb />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/siswa" element={<Siswa />} />
        <Route path="/siswa/:id" element={<SiswaDetail />} />

        <Route path="/calon_siswa" element={<CalonSiswa />} />
        <Route path="/calon_siswa/:id" element={<CalonSiswaDetail />} />

        <Route path="/guru" element={<Guru />} />
        <Route path="/guru/create" element={<GuruCreate />} />
        <Route path="/guru/edit" element={<guruEdit />} />
        <Route path="/guru/:id" element={<GuruDetail />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
