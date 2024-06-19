import React from "react";

//GetThingsDone
import GetThingsDone from "../pages/GetThingsDone";

const authProtectedRoutes = [
  { path: "/get-things-done", component: <GetThingsDone /> },
];



export { authProtectedRoutes };
