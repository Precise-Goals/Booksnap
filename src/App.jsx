import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./containers/About";
import { Community } from "./containers/Community";
import { Notes } from "./containers/Notes";
import { Ecom } from "./containers/Ecom";
import { Hero } from "./containers/Hero";
import { Sign } from "./components/Sign";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./AuthContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const routeData = [
    { path: "/", element: <Hero /> },
    { path: "/booksnap-about", element: <About /> },
    { path: "/booksnap-community", element: <Community /> },
    { path: "/booksnap-notes", element: <Notes /> },
    { path: "/booksnap-authentication", element: <Sign /> },
    {
      path: "/booksnap-snapstore",
      element: (
        <PrivateRoute>
          <Ecom />
        </PrivateRoute>
      ),
    },
  ];

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="mainapp">
          <Navbar />
          <Routes>
            {routeData.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
