import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound/Index";

function MainRoutes() {
  return useRoutes([
    {path: '/', element: <Home/>},
    {path:'*', element: <NotFound/>},
    {path:'/login', element: <Login/>}

  ]);
}

export default MainRoutes;