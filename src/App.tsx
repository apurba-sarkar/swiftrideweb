import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import Otp from "./pages/Otp";
import List from "./pages/List";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}
