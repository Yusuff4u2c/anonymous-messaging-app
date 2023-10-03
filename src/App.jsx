import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
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
import MessageForm from "./pages/message-form";
import AuthRoute from "./components/auth-route";

function App() {
  function Layout() {
    // check if the user is logged in
    // navigate to login page

    return (
      <>
        <Outlet />
        <Footer />
      </>
    );
  }
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route element={<Layout />}>
                <Route
                  path="/login"
                  element={
                    <AuthRoute>
                      <Login />
                    </AuthRoute>
                  }
                />
                <Route
                  path="/forgotpassword"
                  element={
                    <AuthRoute>
                      <ForgotPassword />
                    </AuthRoute>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <AuthRoute>
                      <Registration />
                    </AuthRoute>
                  }
                />
                <Route path="/:username" element={<MessageForm />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/change-email" element={<ChangeEmail />} />
                  <Route path="/change-username" element={<Changeusername />} />
                  <Route path="/change-password" element={<ChangePassword />} />
                </Route>
                <Route path="/disclaimer" element={<Disclaimer />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
        <Toaster />
      </AppProvider>
    </>
  );
}

export default App;
