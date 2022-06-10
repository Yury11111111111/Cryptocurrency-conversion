import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Briefcase from "./pages/Briefcase";
import Cryptocurrency_conversion from "./pages/Cryptocurrency_conversion";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="logo"></div>

        <Link to="/Briefcase" className="nav">
          <div className="briefcase"></div>
          Мой Портфель
        </Link>
        <Link to="/Cryptocurrency_conversion" className="nav">
          <div className="conversion"></div>
          Конвертация криптовалют
        </Link>
      </header>
      <Routes>
        <Route path="/Briefcase" element={<Briefcase />} />
        <Route
          path="/Cryptocurrency_conversion"
          element={<Cryptocurrency_conversion />}
        />
      </Routes>
    </>
  );
}
