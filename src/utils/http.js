import store from "@/store";
import axios from "axios";

const http = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});

http.interceptors.request.use(
  (config) => {
    // 对config进行修改，每次请求前做的事情
    const state = store.getState();
    //console.log(state.todos.user.token, "11111");
    if (state.todos.user.token) {
      config.headers.Authorization = `Bearer ${state.todos.user.token}`;
    }
    return config;
  },
  (e) => Promise.reject(e)
);

//统一添加请求头
http.interceptors.response.use(
  (res) => {
    return res?.data?.data || res;
  },
  (e) => Promise.reject(e)
);

export { http };
