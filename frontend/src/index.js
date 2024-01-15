import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./scanes/Dashboard/Dashboard";
import Login from "./scanes/Login/Login";
import Siswa from "./scanes/Siswa/siswaScreen";
import Guru from "./scanes/Guru/guruScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/siswa" element={<Siswa />} />
      <Route path="/guru" element={<Guru />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
