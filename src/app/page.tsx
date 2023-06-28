'use client'
import { useState, useEffect } from "react";
import { AppBar, Box, Card, Container, CssBaseline, GlobalStyles, Grid, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import { eachDayOfInterval, getDay } from "date-fns";

import fundo from '../../public/fundo.png'
import card1 from '../../public/card1.png'
import card2 from '../../public/card2.png'
import card3 from '../../public/card3.png'

const defaultTheme = createTheme();

export default function Home() {
  const [treinosFaltantes, setTreinosFaltantes] = useState(0);

  const concluirTreino = () => {
    setTreinosFaltantes(treinosFaltantes - 1);
  };

  useEffect(() => {
    const hoje = new Date();
    const dataCheerfest = new Date("2023-12-02"); // Data do Cheerfest (2 de dezembro de 2023)

    const domingos = eachDayOfInterval({ start: hoje, end: dataCheerfest }).filter(
      (date) => getDay(date) === 0
    );

    setTreinosFaltantes(domingos.length);

    const timer = setInterval(() => {
      const currentDate = new Date();
      // Verifica se é domingo (0 representa domingo, 1 representa segunda-feira e assim por diante)
      if (currentDate.getDay() === 0) {
        concluirTreino();
      }
    }, 1000 * 60 * 60 * 24); // Verifica a cada 24 horas (1 dia)

    return () => {
      clearInterval(timer); // Limpa o timer quando o componente for desmontado
    };
  }, []);

  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <Grid
          sx={{
            backgroundImage: `url(${fundo.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            height: '100vh',
          }}
        >
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography 
              variant="h6" 
              color="inherit" 
              noWrap 
              sx={{ 
                flexGrow: 1,
                textAlign: 'center',
              }}
            >
              Cheer Supreme
            </Typography>
          </Toolbar>
        </AppBar>

        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
          <Grid textAlign="center">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                color: "white",
                padding: '10px',
                borderRadius: '10px 10px 10px 10px',
                background: "rgba(0, 0, 0, 0.5)",
                '@media (max-width: 600px)': {
                  color: 'white',
                  padding: '2px',
                  fontSize: '30px'
                }, 
              }}
            >
            Faltam {treinosFaltantes}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{
                color: "white",
                padding: '10px',
                borderRadius: '10px 10px 10px 10px',
                background: "rgba(0, 0, 0, 0.5)", 
                '@media (max-width: 600px)': {
                  padding: '2px',
                  fontSize: '30px',
                  color: 'white'
                }, 
              }}>
              Treinos para o campeonato CheerFest 
            </Typography>
          </Grid>
        </Container>
        
        {/* <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="center">
              <Box
                 sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: "0 auto",
                  '@media (max-width: 600px)': {
                    flexDirection: 'column',
                    marginRight: '-14px'
                  },
                }}
              >
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      height: "200px",
                      width: "300px",
                      margin: "8px",
                      backgroundImage: `url(${card1.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: "center",
                    }}
                  >
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      height: "300px",
                      width: "200px",
                      margin: "8px",
                      backgroundImage: `url(${card2.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: "center",
                    }}
                  >
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      height: "200px",
                      width: "300px",
                      margin: "8px",
                      backgroundImage: `url(${card3.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: "center",
                    }}
                  >
                  </Card>
                </Grid>
              </Box>
          </Grid>
        </Container> */}

        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            alignItems: 'center'
          }}
        >

        </Container>
        </Grid>
      </ThemeProvider>
  )
}
