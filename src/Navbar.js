import React, { useState } from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import avatar from './avatar.png';
import logo from './logo2.png';
import VerPerfil from './VerPerfil.js';
import EditarPerfil from './EditarPerfil.js';



const useStyles = makeStyles((theme) => ({
  root: {
    flexFlow:1,
    display: 'flex',
  },
  appBar: {
    width: '100%',
    marginLeft: 240,
    marginBottom: theme.spacing(3),
    backgroundColor: '#ffa500',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatarButton: {
    marginLeft: 'auto',
  },
}));

function Navbar({ handleMenuToggle }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPerfil, setOpenPerfil] = useState(false);
  const [openEditarPerfil, setOpenEditarPerfil] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [usuario, setUsuario] = useState({
    Nombres: "Juan",
    Apellidos: "Perez",
    Edad: 30,
    DNI: "12345678",
    Correo: "juan.perez@example.com",
    Celular: "987654321",
    Región: "Lima",
    Provincia: "Lima metropolitana",
    Distrito: "Miraflores",
    Dirección: "Av. Larco 123",
    Contraseña: "123"
  });

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenPerfil = () => {
    setOpenPerfil(true);
  };

  const handleClosePerfil = () => {
    setOpenPerfil(false);
  };

  const handleMenuClose2 = () => {
    setOpenEditarPerfil(true);
  };

  const handleCloseEditarPerfil = () => {
    setOpenEditarPerfil(false);
  };

  const handleLogout = () => {
    window.location.href = '/login';
  };

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenuToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <img src={logo} style={{ width: '100px', height: '50px' }} alt="Logo" />
              Patitas perdidas
            </Typography>
            <Switch
              checked={darkMode}
              onChange={handleDarkModeChange}
              color="default"
              inputProps={{ 'aria-label': 'toggle dark mode' }}
            />
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleAvatarClick}
              color="inherit"
              className={classes.avatarButton}
            >
              <Avatar alt="Usuario" src={avatar} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleOpenPerfil}>Ver perfil</MenuItem>
              <VerPerfil open={openPerfil} handleClose={handleClosePerfil} usuario={usuario} />
              <MenuItem onClick={handleMenuClose2}>Editar perfil</MenuItem>
              <EditarPerfil open={openEditarPerfil} handleClose={handleCloseEditarPerfil} usuario={usuario} />
              <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          {/* Aquí va el contenido principal de tu aplicación */}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Navbar;

