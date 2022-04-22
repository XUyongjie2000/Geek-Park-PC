import { BrowserRouter } from "react-router-dom";
import AppRoute from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
