import React from 'react';
import {Grid, TextField, Button, ThemeProvider, Paper} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme/appTheme";

const useStyles = makeStyles((theme) => ({
    login: {
      width: "100%",
      height: "365px",
      objectFit: "cover",
      margin: 70
    },
    contenidoLogin:{
        paddingTop: 25,
        paddingBottom: 250,
        justify: "space-between",
        alignItems: "center",
        direction: "column",
        justifyContent: "center"
    },
    logo:{
        width: "300px"
    }, 
    img:{
       minHeight: '100vh'
    },
    containerImg:{
        justify:"center"
     },
     content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    
      },
  }));

export const RegisterScreen = () => {
    const classes = useStyles();
    const paperStyle={padding:0,height:'75vh', width: 1200, margin: "20px auto"}
    return (
        <ThemeProvider theme={theme}>
    <div style={{height: 50}} />
        <Paper elevation={10} style={paperStyle}>
    <div>
       <Grid container className={classes.img}>
       <Grid item xs={12} sm={6}>
            <img src="images/imagenRegisterGrande.svg" className={classes.login} alt="imagenEmpresa"/>
       </Grid>
       <Grid container item xs={12} sm={6} className={classes.contenidoLogin}>
     <div />
     <div style={{display: 'flex', flexDirection: 'column', maxWidth: '400', minWidth: '300'}}>
         <Grid container className={classes.containerImg}>
             <img src="images/logoletras.JPG" alt="logo" className={classes.logo} />
        </Grid>
        <TextField label="Usuario" margin="normal" />
        <TextField label="Contraseña" margin="normal" />
        <TextField label="Fecha de Nacimiento" margin="normal" />
        <TextField label="Teléfono" margin="normal" />
        <TextField label="Correo" margin="normal" />
        <div style={{height: 20}} />
        <Button color="primary" variant="contained">Registrar</Button>
     </div>
     <div />
    </Grid> 
    </Grid> 
    </div>
    </Paper>

    </ThemeProvider>
    )
}
