import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

import "./contato.css";

function Contato() {
    return (
        <>
            <Grid container justifyContent="center" className="container">
                <Grid alignItems="center" item xs={6}>
                    <img src="" alt="Logo da página" className="img" />
                </Grid>
                <Grid item xs={6}>

                    <Box paddingX={15}>
                        <Typography variant="h3" gutterBottom component="h3" align="center" className="titulo"> Confira aqui:</Typography>
                        
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid xs={12} className="postagem">
                </Grid>
            </Grid>
        </>
    )
}

export default Contato;