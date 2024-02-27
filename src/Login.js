import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import img from './img.jpg';
import PasswordResetModal from './restablecer.js';
import RegisterModal from './Registrar.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Verifica si el usuario y la contraseña son correctos
    if (email === 'user@gmail.com' && password === '12345') {
      // Redirige al usuario al dashboard si las credenciales son correctas
      window.location.href = '/dashboard'; // Esto redirige al usuario al dashboard
    } else {
      // Muestra un mensaje de error si son incorrectos
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* Lateral izquierdo */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" color="primary" gutterBottom style={{ color: 'orange' }}>
              TE AYUDAMOS A BUSCAR A TU MASCOTA
            </Typography>
            <img src={img} alt="Imagen" className={classes.image} style={{ width: '700px', height: '600px' }} />
            <Typography variant="body2" paragraph>
              "Patitas Perdidas" es una aplicación diseñada para ayudar a la comunidad a encontrar mascotas perdidas.
              La aplicación permite a los usuarios publicar información sobre mascotas perdidas, incluyendo detalles
              como la ubicación y una descripción de la mascota. Los usuarios también pueden buscar en la aplicación
              para ver si alguien ha encontrado a su mascota perdida. La aplicación está diseñada para ser intuitiva y
              fácil de usar, brindando un medio efectivo para ayudar a reunir a las mascotas perdidas con sus dueños.
            </Typography>
          </Paper>
        </Grid>
        {/* Lateral derecho */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h2" gutterBottom style={{ color: 'orange' }}>
              Bienvenido, inicia sesión
            </Typography>
            <br />
            <form>
              <TextField
                label="Usuario"
                variant="outlined"
                margin="normal"
                style={{ width: '60%' }}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <TextField
                label="Contraseña"
                variant="outlined"
                margin="normal"
                style={{ width: '60%' }}
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <PasswordResetModal />
              
              <br />
              <br />
              <Button variant="contained" color="primary" onClick={handleLogin} style={{ backgroundColor: '#1976d2', color: 'white' }}>
                Entrar
              </Button>
              <br />
              <br />
              <Typography variant="body2" color="primary" paragraph style={{ color: 'orange' }} >
                ¿Por primera vez aquí?
              </Typography>
              
              <RegisterModal />
              <br />
              <p>O continúa con</p>
              <br />
              <div>
                <Button variant="outlined" color="primary" style={{ backgroundColor: '#1976d2', color: 'white', marginRight: '20px' }}>
                  Facebook
                </Button>
                <Button variant="outlined" color="primary" style={{ backgroundColor: '#1976d2', color: 'white' }} >
                  Google
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;

