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
import imagen1 from './imagen1.jpg';
import imagen2 from './imagen2.jpg';
import imagen3 from './imagen3.jpg';
import imagen4 from './imagen4.jpg';
import imagen5 from './imagen5.jpg';
import './Dashboard.css'
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
  

  const data = [
    {
      id: 1,
      titulo: "Se busca perrito perdido en la Av Perú",
      raza: "Cruzado",
      distrito: "Comas",
      fechaPerdida: "2024-01-15",
      descripcion: "Perrito mediano de color marrón, con orejas largas.",
      imagen: imagen1
    },
    {
      id: 2,
      titulo: "Perrito Golden perdido cerca del parque",
      raza: "Golden",
      distrito: "SMP",
      fechaPerdida: "2024-01-20",
      descripcion: "Perrito de tamaño grande, color dorado claro, llevaba un collar azul.",
      imagen: imagen2
    },
    {
      id: 3,
      titulo: "Perrito Chihuahua extraviado en Los Olivos",
      raza: "Chihuahua",
      distrito: "Los Olivos",
      fechaPerdida: "2024-02-05",
      descripcion: "Chihuahua de pelaje blanco y corto, ojos grandes y cola larga.",
      imagen: imagen3
    },
    {
      id: 4,
      titulo: "Se busca Pitbull perdido en el Cercado de Lima",
      raza: "Pitbull",
      distrito: "Cercado de Lima",
      fechaPerdida: "2024-02-10",
      descripcion: "Pitbull grande de color marrón con color blanco en la panza.",
      imagen: imagen4
    },
    {
      id: 5,
      titulo: "Se busca Chihuahua perdido en Independencia",
      raza: "Chihuahua",
      distrito: "Independencia",
      fechaPerdida: "2024-02-15",
      descripcion: "Chihuahua de pelaje color beige, ojos grandes y cola pequeña.",
      imagen: imagen5
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRaza, setSelectedRaza] = useState('');
  const [selectedFecha, setSelectedFecha] = useState('');
  const [selectedDistrito, setSelectedDistrito] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const cardsPerPage = 2;

  const filteredData = data.filter(card => {
    if (selectedRaza && card.raza !== selectedRaza) return false;
    if (selectedFecha === 'esteAño' && new Date(card.fechaPerdida).getFullYear() !== new Date().getFullYear()) return false;
    if (selectedFecha === 'estaSemana' && !isThisWeek(new Date(card.fechaPerdida))) return false;
    if (selectedFecha === 'haceTresDias' && !isWithinLastNDays(new Date(card.fechaPerdida), 3)) return false;
    if (selectedDistrito && card.distrito !== selectedDistrito) return false;
    return true;
  });

  const isThisWeek = (date) => {
    const today = new Date();
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const lastDayOfWeek = new Date(today.setDate(firstDayOfWeek.getDate() + 6));
    return date >= firstDayOfWeek && date <= lastDayOfWeek;
  };

  const isWithinLastNDays = (date, days) => {
    const today = new Date();
    const lastNDays = new Date(today.setDate(today.getDate() - days));
    return date >= lastNDays && date <= new Date();
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = () => {
    // setSearchKeyword(valor_del_textfield);
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    setSearchKeyword(searchInput);
  };

  

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

      <div className="filter-container">
        <div className="search-container">
          <TextField
            id="searchInput"
            label="Buscar"
            variant="outlined"
            style={{ width: '90%' }}
            value={searchKeyword}
            onChange={handleSearch}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </div>
        <br/>
        <div className="filter-options">
          <TextField
            select
            label="Por raza"
            variant="outlined"
            style={{ width: '180px', marginRight: '15px' }}
            value={selectedRaza}
            onChange={(e) => setSelectedRaza(e.target.value)}
          >
            <MenuItem value="">Todas las razas</MenuItem>
            <MenuItem value="pastorAleman">Pastor Alemán</MenuItem>
            <MenuItem value="golden">Golden</MenuItem>
            <MenuItem value="cruzado">Cruzado</MenuItem>
            <MenuItem value="chihuahua">Chihuahua</MenuItem>
          </TextField>
          <TextField
            select
            label="Por fecha"
            variant="outlined"
            style={{ width: '180px', marginRight: '15px' }}
            value={selectedFecha}
            onChange={(e) => setSelectedFecha(e.target.value)}
          >
            <MenuItem value="">Todas las fechas</MenuItem>
            <MenuItem value="esteAño">Este año</MenuItem>
            <MenuItem value="estaSemana">Esta semana</MenuItem>
            <MenuItem value="haceTresDias">Hace tres días</MenuItem>
          </TextField>
          <TextField
            select
            label="Por distrito"
            variant="outlined"
            style={{ width: '180px', marginRight: '15px' }}
            value={selectedDistrito}
            onChange={(e) => setSelectedDistrito(e.target.value)}
          >
            <MenuItem value="">Todos los distritos</MenuItem>
            <MenuItem value="losOlivos">Los Olivos</MenuItem>
            <MenuItem value="smp">SMP</MenuItem>
            <MenuItem value="comas">Comas</MenuItem>
            <MenuItem value="independencia">Independencia</MenuItem>
          </TextField>
          <MapButton/>
        </div>
      </div>
      <br/>
      <div className="cards-container">
        {currentCards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.imagen} alt={card.titulo} width="400" height="300"/>
            <div className="card-details">
              <h3>{card.titulo}</h3>
              <p><strong>Raza:</strong> {card.raza}</p>
              <p><strong>Distrito:</strong> {card.distrito}</p>
              <p><strong>Fecha de pérdida:</strong> {card.fechaPerdida}</p>
              <p><strong>Descripción:</strong> {card.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {filteredData.length > cardsPerPage && (
          <ul>
            {Array.from({ length: Math.ceil(filteredData.length / cardsPerPage) }, (_, i) => (
              <li key={i} onClick={() => paginate(i + 1)}>
                {i + 1}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;



