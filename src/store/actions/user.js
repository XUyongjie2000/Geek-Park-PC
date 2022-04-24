import { setToken, http, getToken, clearToken } from "@/utils";
export const login = (mobile, code) => {
  return async (dispatch) => {
    // const res = await axios.post(
    //   "http://geek.itheima.net/v1_0/authorizations",
    //   {
    //     mobile,
    //     code,
    //   }
    // );
    const data = await http.post("/authorizations", {
      mobile,
      code,
    });

    //获取token
    // const { token } = res.data.data;
    setToken(data.token);
    // localStorage.setItem("geek-pc-token", token);
    dispatch({ type: "user/setToken", payload: data.token });
  };
};
export const getUserInfo = () => {
  return async (dispatch, getState) => {
    const data = await http.get("/user/profile", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    console.log(data.name);
    dispatch({ type: "user/getUserInfo", payload: data.name });
  };
};
//清除token
export const logout = () => {
  return (dispatch, getState) => {
    clearToken();
    //清除token和name
    dispatch({ type: "login/setToken", payload: "" });
    dispatch({ type: "login/profile", payload: "" });
  };
};
