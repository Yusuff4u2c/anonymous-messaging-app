import { createContext, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes, Link } from "react-router-dom";
import Navigation from "./components/navigation";
import Landing from "./pages/landing";
import Footer from "./components/footer";
import Registration from "./pages/registration";
import Login from "./pages/log-in";
import Changeusername from "./pages/change-username";
import Settings from "./pages/settings";
import Home from "./pages/home";
import Messages from "./pages/messages";
import ChangePassword from "./pages/change-password";
import ChangeEmail from "./pages/change-email";
import Disclaimer from "./pages/disclaimer";
import { AppProvider } from "./contexts/AppContext";

function App() {
  function Layout() {
    return (
      <>
        <Navigation />
        <Outlet />
        <Footer />
      </>
    );
  }
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route element={<Layout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/home" element={<Home />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/change-email" element={<ChangeEmail />} />
              <Route path="/change-username" element={<Changeusername />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
