import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetail from "./pages/CharacterDetail";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import BottomNav from "./components/BottomNav";
import PWABadge from "./components/PWABadge";
import Layout from "./components/Layout";

function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentRoute = location.pathname.startsWith("/character")
    ? "characters"
    : location.pathname === "/"
    ? "home"
    : location.pathname.replace("/", "");

  const handleNav = (id) => {
    switch (id) {
      case "home":
        navigate("/");
        break;
      case "characters":
        navigate("/characters");
        break;
      case "about":
        navigate("/about");
        break;
      case "profile":
        navigate("/profile");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="min-h-screen pb-28">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>

      <PWABadge />
      <BottomNav current={currentRoute} onNavigate={handleNav} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);
