import React from "react";

//GetThingsDone
import GetThingsDone from "../pages/GetThingsDone";
import Login from "../pages/Authentication/Login";
const authProtectedRoutes = [
  { path: "/get-things-done", component: <GetThingsDone /> },
  { path: "/login", component: <Login /> },
];
const publicRoutes = [
  // Authentication Page

  { path: "/login", component: <Login /> },
];

export { authProtectedRoutes, publicRoutes };
