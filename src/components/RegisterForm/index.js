import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const RegisterForm = ({ setVisualizacao }) => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleSubmit = async () => {
    try {
      await api.post("usuarios", { nome: nome, email: email, senha: senha });
      toast.success("Usuário Cadastrado!");
      navigate("/treinos");
    } catch {
      toast.error("Não foi possível cadastrar usuário");
    }
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Vamos começar!</span>

            <div className="wrap-input">
              <input
                className={nome !== "" ? "has-val input" : "input"}
                type="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

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
                onClick={() => setVisualizacao("loginForm")}
              >
                Voltar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
