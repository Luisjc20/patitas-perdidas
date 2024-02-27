import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar'; // Importar el componente Navbar
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Footer from './Footer'; // Importar el componente Footer
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import img1 from './p1.jpg';
import img2 from './p2.jpg';
import img3 from './p3.jpg';
import EditarInfoMascota from './EditarInfoMascota'; 
import RegistrarMascotaComoEncontrada from './RegistrarMascotaComoEncontrada';
import ListaMascotas from './ListaMascotas';
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 250,
  },
  drawerPaper: {
    width: 250,
  },
  searchContainer: {
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    marginRight: theme.spacing(2),
  },
  card: {
    marginBottom: theme.spacing(3),
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [openRegistrarMascota, setOpenRegistrarMascota] = useState(false); // Estado para controlar la apertura del modal
  const [openListaMascotas, setOpenListaMascotas] = useState(false);

  const handleOpenListaMascotas = () => {
    setOpenListaMascotas(true);
  };

  const handleCloseListaMascotas = () => {
    setOpenListaMascotas(false);
  };
  const handleOpenRegistrarMascota = () => {
    setOpenRegistrarMascota(true);
  };

  const handleCloseRegistrarMascota = () => {
    setOpenRegistrarMascota(false);
  };
  const [openEditarInfoMascota, setOpenEditarInfoMascota] = useState(false); // Estado para controlar la apertura y cierre del modal

  // Función para abrir el modal
  const handleOpenEditarInfoMascota = () => {
    setOpenEditarInfoMascota(true);
  };
  const handleSearch = () => {
    // Lógica para la búsqueda
    console.log('Realizar búsqueda...');
  };
  const handleEditarMascotaClick=() =>{
    window.location.href = '/EditarInfoMascota';
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al elemento del menú lateral

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Función que maneja los clics fuera del menú
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && menuOpen) {
        setMenuOpen(false);
      }
    };

    // Agregamos el manejador de eventos al documento para detectar clics fuera del menú
    document.addEventListener('mousedown', handleClickOutside);

    // Limpiamos el manejador de eventos al desmontar el componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]); // Dependencia para que se actualice cuando el menú cambia de estado

  const MapButton = () => {
    const openMapWindow = () => {
      // URL para cargar el mapa de Google Maps
      const url = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62452.1786223459!2d-77.01736174819332!3d-11.956411472916638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1707797752304!5m2!1ses!2spe';

      // Tamaño de la ventana emergente
      const width = 600;
      const height = 450;

      // Posición centrada de la ventana emergente
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;

      // Opciones de la ventana emergente
      const options = `
        width=${width},
        height=${height},
        top=${top},
        left=${left},
        resizable=yes,
        scrollbars=yes
      `;

      // Abrir la ventana emergente con el mapa de Google Maps
      window.open(url, '_blank', options);
    };

    return (
      <Button variant="outlined" color="primary" onClick={openMapWindow}>Ver en mapa</Button>
    );
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar handleMenuToggle={handleMenuToggle} />

      {/* Sidebar */}
      <Drawer
        className={classes.drawer}
        ref={menuRef}
        variant="persistent"
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          {/* Contenido del Sidebar */}
          <MenuItem onClick={handleOpenEditarInfoMascota}>
        Editar información de mascota
       </MenuItem>
        {openEditarInfoMascota && <EditarInfoMascota onClose={() => setOpenEditarInfoMascota(false)} />}
          
        <MenuItem onClick={handleOpenRegistrarMascota}>
        Reportar mascota encontrada
       </MenuItem>
       <RegistrarMascotaComoEncontrada open={openRegistrarMascota} handleClose={handleCloseRegistrarMascota} />
       
       <MenuItem onClick={handleOpenListaMascotas}>Ver reportes</MenuItem>

      <ListaMascotas open={openListaMascotas} handleClose={handleCloseListaMascotas} />
        </div>
      </Drawer>

      {/* Main Content */}
      <Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className={classes.searchContainer}>
          {/* Componente de búsqueda con filtros */}
          <TextField
            label="Buscar"
            variant="outlined"
            className={classes.searchInput}
            style={{ width: '90%' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </div>
        <div className={classes.filterContainer}>
          <TextField
            select
            label="Por raza"
            variant="outlined"
            style={{ width: '180px', marginRight: '15px' }}
          >
            <MenuItem value="pastorAleman">Pastor Alemán</MenuItem>
            <MenuItem value="golden">Golden</MenuItem>
            <MenuItem value="cruzado">Cruzado</MenuItem>
          </TextField>

          <TextField
            select
            label="Por fecha"
            variant="outlined"
            style={{ width: '180px', marginRight: '15px' }}
           
          >
            <MenuItem value="esteMes">Este mes</MenuItem>
            <MenuItem value="estaSemana">Esta semana</MenuItem>
            <MenuItem value="haceTresDias">Hace tres días</MenuItem>
          </TextField>

          <TextField
            select
            label="Por distrito"
            variant="outlined"
            style={{ width: '180px', marginRight: '15px' }}
          >
            <MenuItem value="sanMiguel">San Miguel</MenuItem>
            <MenuItem value="smp">SMP</MenuItem>
            <MenuItem value="comas">Comas</MenuItem>
            <MenuItem value="independencia">Independencia</MenuItem>
          </TextField>

          <MapButton />
          
        </div>
        <br/>
        <br/>
        {/* Cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
            <CardMedia
                component="img"
                alt="Imagen"
                height="300"
                image={img1}
                title="mascota1"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mascota perdida en San Miguel
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Se perdió cerca al parque de las Leyendas. Se ofrece recompensa. LLamar al 99999999
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
            <CardMedia
                component="img"
                alt="Imagen"
                height="300"
                image={img2}
                title="mascota1"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mascota perdida en SMP
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Se perdió cerca al parque de las Leyendas. Se ofrece recompensa. LLamar al 99999999
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
            <CardMedia
                component="img"
                alt="Imagen"
                height="300"
                image={img3}
                title="mascota1"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mascota perdida en Comas
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Se perdió cerca al parque de las Leyendas. Se ofrece recompensa. LLamar al 99999999
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;



