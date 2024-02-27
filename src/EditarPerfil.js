import React, { useState } from 'react';
import { Modal, Typography, Grid, TextField, Button } from '@mui/material';
import user1 from './user1.jpg';

const EditarPerfil = ({ open, handleClose, usuario }) => {
  const { Nombres, Apellidos, Edad, DNI, Correo, Celular, Distrito, Dirección, Contraseña } = usuario;
  const [perfilModificado, setPerfilModificado] = useState({}); // Estado para almacenar los cambios en el perfil

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfilModificado({ ...perfilModificado, [name]: value });
  };

  const handleGuardar = () => {
    // Verifica si algún campo está vacío
    const camposVacios = Object.values(perfilModificado).some(value => value === '');
    if (camposVacios) {
      alert('Error, falta completar datos');
    } else {
      // Aquí podrías enviar los datos modificados al servidor o realizar otra acción necesaria
      alert('El perfil del usuario ha sido modificado exitosamente');
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '24px',
        maxWidth: 400
      }}>
        <Typography variant="h6" align="center" gutterBottom>
          Perfil: {Nombres} {Apellidos}
        </Typography>
        <img src={user1} alt="Imagen" style={{ width: '250px', height: '200px', alignContent: 'center', padding: '15px' }} />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField name="Nombres" label="Nombres" defaultValue={Nombres} fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="Apellidos" label="Apellidos" defaultValue={Apellidos} fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField name="Edad" label="Edad" defaultValue={Edad} fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField name="DNI" label="DNI" defaultValue={DNI} fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField name="Correo" label="Correo" defaultValue={Correo} fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField name="Celular" label="Celular" defaultValue={Celular} fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="Distrito" label="Distrito" defaultValue={Distrito} fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="Dirección" label="Dirección" defaultValue={Dirección} fullWidth onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="Contraseña" label="Contraseña" defaultValue={Contraseña} fullWidth onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" style={{ marginTop: '16px' }}>
          <Grid item>
          <Button onClick={handleGuardar} variant="contained" color="primary">
              Guardar
            </Button>
            
          </Grid>
          <Grid item>
          <Button onClick={handleClose} variant="contained" color="primary">
              Cerrar
            </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default EditarPerfil;
