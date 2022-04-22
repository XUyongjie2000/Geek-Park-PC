import { useEffect, useState } from "react";

//当前函数用于鉴权
function isAuth() {
  //鉴权成功的状态
  //   return Promise.resolve();
  //鉴权失败的状态
  return Promise.reject();
}
//当组件调用该钩子函数以后要进行鉴权并返回鉴权结果
export default function useAuth() {
  //用于存储鉴权结果
  const [auth, setAuth] = useState(false);
  //鉴权过程中的等待状态
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //开始鉴权
    isAuth()
      //有权限
      .then(() => {
        setAuth(true);
      })
      //没有权限
      .catch(() => {
        setAuth(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { auth, loading };
}
