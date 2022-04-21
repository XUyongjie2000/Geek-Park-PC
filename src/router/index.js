import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import { AuthRoute } from "@/components/AuthRoute";
import Home from "@/pages/Home";
const routers = [
  {
    title: "auth",
    path: "/",
    component: AuthRoute,
  },
  {
    title: "Layout",
    path: "/",
    component: Layout,
  },
  {
    title: "Home",
    path: "/home",
    component: Home,
  },
  {
    title: "Login",
    path: "/login",
    component: Login,
  },
];

export default routers;
