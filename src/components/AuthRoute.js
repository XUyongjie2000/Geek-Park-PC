import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AuthRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("itcast_geek_pc");
    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  });
};
