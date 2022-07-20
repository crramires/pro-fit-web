import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const LoginForm = ({ setIsAuthenticated, setVisualizacao }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await api.post("login", { email: email, senha: senha });
      setIsAuthenticated(res.data.token);
      localStorage.setItem("pro-fit", JSON.stringify(res.data.token));
      toast.success("Logado com sucesso");
      navigate("/treinos");
    } catch {
      toast.error("Não foi possível realizar login");
    }
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem Vindo!</span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={senha !== "" ? "has-val input" : "input"}
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button
                type="button"
                className="login-form-btn"
                onClick={() => handleSubmit()}
              >
                Entrar
              </button>
            </div>
            <div className="container-login-form-btn">
              <button
                type="button"
                className="login-form-btn"
                onClick={() => setVisualizacao("Cadastrar")}
              >
                Cadastre-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
