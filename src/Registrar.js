import React, { useState } from 'react';
import { Modal, TextField, Button, Typography, Grid } from '@mui/material';

function RegisterModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    edad: '',
    dni: '',
    correo: '',
    celular: '',
    region: '',
    provincia: '',
    distrito: '',
    direccion: '',
    password: '',
    confirmPassword: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Verificar si todos los campos obligatorios están completos
    const requiredFields = ['nombres', 'apellidos', 'edad', 'dni', 'correo', 'celular', 'region', 'provincia', 'distrito', 'direccion', 'password', 'confirmPassword'];
    const incompleteFields = requiredFields.filter(field => !formData[field]);

    if (incompleteFields.length === 0) {
      // Aquí puedes enviar formData a la base de datos
      console.log(formData);
      alert('Registro exitoso');
      handleClose();
    } else {
      // Mostrar mensaje de campos incompletos y resaltar campos en rojo
      alert('Faltan completar algunos campos');
      incompleteFields.forEach(field => {
        const fieldInput = document.getElementsByName(field)[0];
        fieldInput.style.borderColor = 'red';
      });
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Registrarse
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          backgroundColor: 'rgba(255, 255, 255, 0.65)', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
          padding: '24px', 
          maxWidth: 600 // Aumenta el ancho del modal para dos columnas
        }}>
          <Typography variant="h5" align="center" gutterBottom>Nuevo registro de usuario</Typography>
          <Grid container spacing={2}>
            {/* Primera columna */}
            <Grid item xs={6}>
              <TextField name="nombres" label="Nombres" value={formData.nombres} onChange={handleChange} fullWidth required margin="dense" />
              <TextField name="apellidos" label="Apellidos" value={formData.apellidos} onChange={handleChange} fullWidth required margin="dense" />
              <TextField name="edad" label="Edad" value={formData.edad} onChange={handleChange} fullWidth required margin="dense" />
              <TextField name="dni" label="DNI" value={formData.dni} onChange={handleChange} fullWidth required margin="dense" />
              <TextField name="correo" label="Correo" value={formData.correo} onChange={handleChange} fullWidth required margin="dense" />
              <TextField name="celular" label="Celular" value={formData.celular} onChange={handleChange} fullWidth required margin="dense" />
            </Grid>
            {/* Segunda columna */}
            <Grid item xs={6}>
              <TextField name="region" label="Región" value={formData.region} onChange={handleChange} fullWidth required margin="dense" />
              <TextField name="provincia" label="Provincia" value={formData.provincia} onChange={handleChange} fullWidth required margin="dense" />
              <TextField name="distrito" label="Distrito" value={formData.distrito} onChange={handleChange} fullWidth required margin="dense" />
              <TextField name="direccion" label="Dirección" value={formData.direccion} onChange={handleChange} fullWidth required margin="dense" />
              <TextField name="password" label="Contraseña" type="password" value={formData.password} onChange={handleChange} fullWidth required margin="dense" />
              <TextField name="confirmPassword" label="Repetir Contraseña" type="password" value={formData.confirmPassword} onChange={handleChange} fullWidth required margin="dense" />
            </Grid>
          </Grid>
          {/* Botones */}
          <Grid container justifyContent="center" style={{ marginTop: '16px' }}>
            <Grid item>
              <Button onClick={handleClose} variant="contained" color="error" style={{ marginRight: '8px' }}>Cancelar</Button>
            </Grid>
            <Grid item>
              <Button onClick={handleSubmit} variant="contained" color="primary">Aceptar</Button>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </>
  );
}

export default RegisterModal;


