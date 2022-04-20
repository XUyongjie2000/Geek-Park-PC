import "./App.sass";
//导入路由
import { Routes, BrowserRouter, Route } from "react-router-dom";
//导入组件
import Login from "./pages/Login";
import Layout from "./pages/Layout";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
