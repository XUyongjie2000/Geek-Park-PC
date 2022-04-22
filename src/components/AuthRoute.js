import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./auth";

function AuthGuardOutlet() {
  // 调用鉴权钩子, 获取异步状态及鉴权结果
  const { auth, loading } = useAuth();
  // 如果异步状态为等待, 渲染等待过程中的UI界面
  if (loading) return <div>loading...</div>;
  // 判断鉴权结果, 如果通过, 渲染路由插座组件, 让 children 组件能够渲染到插座组件中
  // 如果没通过, 重定向到执行授权的页面
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthGuardOutlet;
