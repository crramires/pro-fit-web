import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { toast } from "react-toastify";

const columns = [
  { field: "exercicio", headerName: "Exercicio", width: 270, flex: 1 },
  { field: "serie", headerName: "Serie", width: 130 },
  { field: "descanso", headerName: "Descanso", width: 130 },
  { field: "repeticao", headerName: "Repetições", width: 130 },
];

const TreinoDetalhes = ({ isAuthenticated }) => {
  const [exercicios, setExercicios] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleGet = async () => {
    setLoading(true);
    try {
      const header = `Authorization: Bearer ${JSON.parse(
        localStorage.getItem("pro-fit")
      )}`;

      const { data } = await api.get(`treinos/filtro-id/${id}`, {
        headers: { header },
      });
      setExercicios(data);
    } catch (error) {
      toast.error("Não foi possível listar treinos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Você precisa estar logado para ver os exercícios.");
      navigate("/treinos");
    }
    handleGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <DataGrid
            rows={exercicios}
            columns={columns}
            pageSize={99}
            autoHeight
            rowsPerPageOptions={[5]}
          />
        </div>
      )}
    </div>
  );
};

export default TreinoDetalhes;
