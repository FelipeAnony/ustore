import { useRoutes } from "react-router-dom";

import Home from "./Pages/Home";
import ItenPage from "./Pages/ItenPage";
import Login from "./Pages/Login";
import MyAds from "./Pages/MyAds";
import NotFound from "./Pages/NotFound/Index";
import SellPage from "./Pages/SellPage";
import SignUp from "./Pages/SignUp";

function MainRoutes() {
  return useRoutes([
    {path: '/', element: <Home/>},
    {path:'*', element: <NotFound/>},
    {path:'/iten/:itenId', element: <ItenPage/>},
    {path:'/login', element: <Login/>},
    {path:'/sign-up', element: <SignUp/>},
    {path:'/my-ads', element: <MyAds/>},
    {path:'/sell', element: <SellPage/>}
  ]);
}

export default MainRoutes;