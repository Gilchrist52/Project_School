import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homescreen from "./screens/HomeScreen/Homescreen";
import Dashboard from "./screens/Dashboard/dashboard";
import ErrorPage from "./screens/Error/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
