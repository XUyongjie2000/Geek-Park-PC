import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AppRoute from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Navigate to="/home/dashboard" />} />
        </Routes>
        <AppRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
