import { setToken, http, clearToken } from "@/utils";
export const login = (mobile, code) => {
  return async (dispatch) => {
    const data = await http.post("/authorizations", {
      mobile,
      code,
    });

    setToken(data.token);
    dispatch({ type: "user/setToken", payload: data.token });
  };
};
export const getUserInfo = () => {
  return async (dispatch, getState) => {
    // const data = await http.get("/user/profile", {
    //   headers: {
    //     Authorization: `Bearer ${getToken()}`,
    //   },
    // });
    const data = await http.get("/user/profile");
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
