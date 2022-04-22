import React from "react";
import "./index.sass";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from "react-dom/client";

//组件国际化
import "moment/locale/zh-cn";
import locale from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ConfigProvider locale={locale}>
      <App />
    </ConfigProvider>
  </Provider>
);
