import { Button, Container, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../service/Service";
import "./CadastroTema.css";

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage("token");
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

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
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      put(`/temas`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      alert("Tema atualizado com sucesso");
    } else {
      post(`/temas`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      alert("Tema cadastrado com sucesso");
    }
    back();
  }

  function back() {
    navigate("/temas");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Cadastrar Tema
        </Typography>
        <TextField
          value={tema.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
          id="descricao"
          label="Novo tema"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />

        <Box display="flex" justifyContent="flex-end">
          <Link to="/temas" className="text-decorator-none">
            <Box className="btn-cancelar">
              <Button type="submit" variant="contained" style={{backgroundColor: "#ff0500", color:"white" }}>
                Cancelar
              </Button>
            </Box>
          </Link>

          <Box className="btn-concluir">
            <Button type="submit" variant="contained" style={{backgroundColor: "#61db5c", color:"white" }}>
              Concluir
            </Button>
          </Box>
        </Box>
      </form>
    </Container >
  );
}

export default CadastroTema;