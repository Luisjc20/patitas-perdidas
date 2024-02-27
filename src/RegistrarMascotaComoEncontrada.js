import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

function RegistrarMascotaComoEncontrada({ open, handleClose }) {
  const [fechaEncuentro, setFechaEncuentro] = useState('');
  const [informante, setInformante] = useState('');
  const [nombreMascota, setNombreMascota] = useState('');
  const [direccionEncuentro, setDireccionEncuentro] = useState('');
  const [contactoInformante, setContactoInformante] = useState('');
  const [datosExtras, setDatosExtras] = useState('');
  const [fotos, setFotos] = useState([]);

  const handleGuardar = () => {
    // Validar campos obligatorios
    if (!fechaEncuentro || !informante || !direccionEncuentro || !contactoInformante) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    // Guardar los datos y cerrar el modal
    // Aquí puedes agregar la lógica para guardar los datos en tu backend
    alert('Datos guardados con éxito.');
    handleClose();
  };

  const handleAddPhoto = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFotos(selectedFiles);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <h2>Registrar Mascota Como Encontrada</h2>
        <TextField
          label="Fecha de encuentro"
          variant="outlined"
          fullWidth
          margin="normal"
          value={fechaEncuentro}
          onChange={(e) => setFechaEncuentro(e.target.value)}
        />
        <TextField
          label="Informante (Nombres y Apellidos)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={informante}
          onChange={(e) => setInformante(e.target.value)}
        />
        <TextField
          label="Nombre de la mascota (Opcional)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nombreMascota}
          onChange={(e) => setNombreMascota(e.target.value)}
        />
        <TextField
          label="Dirección del encuentro"
          variant="outlined"
          fullWidth
          margin="normal"
          value={direccionEncuentro}
          onChange={(e) => setDireccionEncuentro(e.target.value)}
        />
        <TextField
          label="Contacto del informante"
          variant="outlined"
          fullWidth
          margin="normal"
          value={contactoInformante}
          onChange={(e) => setContactoInformante(e.target.value)}
        />
        <TextField
          label="Datos extras (Opcional)"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={datosExtras}
          onChange={(e) => setDatosExtras(e.target.value)}
        />
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="image-upload"
          type="file"
          onChange={handleAddPhoto}
          multiple
        />
        <label htmlFor="image-upload" style={{ marginTop: '20px', display: 'block' }}>
          <AddPhotoAlternateIcon /> Agregar fotos (Opcional)
        </label>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={handleGuardar} style={{ marginRight: '10px' }}>
            Guardar
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Cerrar
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default RegistrarMascotaComoEncontrada;

