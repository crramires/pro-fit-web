import { useState } from "react";
import "./styles.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Treinos from "./pages/Treinos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TreinoDetalhes from "./pages/TreinoDetalhes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("pro-fit"))
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      <div style={{ height: "100%", padding: "25px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route path="/treinos" element={<Treinos />} />
          <Route
            path="/treinos/:id"
            element={<TreinoDetalhes isAuthenticated={isAuthenticated} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
