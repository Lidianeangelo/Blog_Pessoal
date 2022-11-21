import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FacebookRounded } from '@mui/icons-material';
import { Instagram, LinkedIn } from '@material-ui/icons';
import GitHub from '@mui/icons-material/GitHub'
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './footer.css';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != '') {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga nossas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/banco_profissionaisnegros" target="_blank"
                                rel="noopener noreferrer">
                                <FacebookRounded className='redes' />
                            </a>
                            <a href="https://www.instagram.com/banco_profissionaisnegros/" target="_blank"
                                rel="noopener noreferrer">
                                <Instagram className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/company/banco_profissionaisnegros/" target="_blank"
                                rel="noopener noreferrer">
                                <LinkedIn className='redes' />
                            </a>
                            <a href="https://github.com/Lidianeangelo/Blog_Pessoal" target="_blank">
                                <GitHub style={{ fontSize: 60, color: 'white' }} />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos'
                            >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://blogpessoal-a75j.onrender.com" rel="noopener
noreferrer">
                                <Typography variant="subtitle2" gutterBottom className='textos'
                                    align="center">Banco de Profissionais Negros</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;