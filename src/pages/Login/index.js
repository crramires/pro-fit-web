import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const [visualizacao, setVisualizacao] = useState("loginForm");

  return (
    <>
      {visualizacao === "loginForm" ? (
        <LoginForm
          setIsAuthenticated={setIsAuthenticated}
          setVisualizacao={setVisualizacao}
        />
      ) : (
        <RegisterForm setVisualizacao={setVisualizacao} />
      )}
    </>
  );
};

export default Login;
