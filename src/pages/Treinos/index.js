import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./styles.css";

const Treinos = () => {
  const [treinos, setTreinos] = useState([]);
  const [filtroTreinos, setFiltroTreinos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const navigate = useNavigate();

  const handleGet = async () => {
    try {
      const { data } = await api.get(`treinos`, { withCredentials: false });
      setTreinos(data);
      setFiltroTreinos(data);
    } catch {
      toast.error("Não foi possível listar exercícios.");
    }
  };

  const handlePesquisa = (e) => {
    setPesquisa(e.target.value);
    const filtroData = e.target.value
      ? treinos.filter((item) =>
          item.dificuldade.toLowerCase().includes(e.target.value.toLowerCase())
        )
      : treinos;
    setFiltroTreinos(filtroData);
  };

  useEffect(() => {
    handleGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="container-pesquisa">
        <h1>Treinos Disponíveis:</h1>
        <input
          className="input-pesquisa"
          type="text"
          value={pesquisa}
          onChange={(e) => handlePesquisa(e)}
          placeholder="Digite sua pesquisa..."
        />
      </div>
      <div className="wrapper-list">
        {filtroTreinos.length > 0 ? (
          filtroTreinos.map((treino) => (
            <div
              className="card-treinos"
              style={{ cursor: "pointer", margin: "8px 0" }}
              key={treino.id}
              onClick={() => navigate(`/treinos/${treino.id}`)}
            >
              <p>{treino.nome}</p>
            </div>
          ))
        ) : (
          <p className="texto-vazio">Nenhum treino disponível</p>
        )}
      </div>
    </div>
  );
};

export default Treinos;
