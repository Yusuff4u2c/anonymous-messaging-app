import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
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
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./pages/forgot-password";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/protected-route";

function App() {
  function Layout() {
    // check if the user is logged in
    // navigate to login page

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
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/register" element={<Registration />} />
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route path="/messages" element={<Messages />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/change-email" element={<ChangeEmail />} />
                <Route path="/change-username" element={<Changeusername />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster />
        </AuthProvider>
      </AppProvider>
    </>
  );
}

export default App;
