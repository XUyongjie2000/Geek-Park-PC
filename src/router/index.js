// import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
// import { AuthRoute } from "@/components/AuthRoute";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import { useRoutes } from "react-router";
// import Layout from "@/pages/Layout";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";
import AuthGuardOutlet from "@/components/AuthRoute";
const routers = [
  // {
  //   title: "auth",
  //   path: "/",
  //   component: AuthRoute,
  // },
  {
    path: "/",
    element: <AuthGuardOutlet />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "dashboard", routeName: "abc", element: <Dashboard /> },
      { path: "article", element: <Article /> },
      {
        path: "publish",
        element: <Publish />,
        children: [{ path: ":id", element: <Publish /> }],
      },
    ],
  },
];

export default function AppRoute() {
  return useRoutes(routers);
}
