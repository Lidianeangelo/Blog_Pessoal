import { Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import { Box } from "@mui/material";
import { useState } from 'react';
import { useEffect} from 'react';
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
import { buscaId, deleteId } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./DeletarTema.css";

function DeletarTema() {

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

  const [tema, setTema] = useState<Tema>();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/tema/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/temas");
    deleteId(`/tema/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    alert("Tema deletado com sucesso");
  }

  function nao() {
    navigate("/temas");
  }

  return (
    <>
      <div className="container">
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Box justifyContent="center">
                <Typography color="textSecondary" gutterBottom>
                  Deseja deletar o Tema:
                </Typography>
                <Typography color="textSecondary">{tema?.descricao}</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
                <Box mx={2}>
                  <Button
                    onClick={sim}
                    variant="contained"
                    className="marginLeft"
                    size="large"
                    color="primary"
                  >
                    Sim
                  </Button>
                </Box>
                <Box mx={2}>
                  <Button
                    onClick={nao}
                    variant="contained"
                    size="large"
                    color="secondary"
                  >
                    Não
                  </Button>
                </Box>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </div>
    </>
  );
}
export default DeletarTema;