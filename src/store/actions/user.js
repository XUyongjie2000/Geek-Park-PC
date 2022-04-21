import { setToken, http } from "@/utils";
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
