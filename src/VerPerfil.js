import React from 'react';
import { Modal, Typography, Grid, TextField, Button } from '@mui/material';
import user1 from './user1.jpg';
const VerPerfil = ({ open, handleClose, usuario }) => {
  const { Nombres, Apellidos, Edad, DNI, Correo, Celular, Distrito, Dirección, Contraseña } = usuario;

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
        <img src={user1} alt="Imagen"  style={{ width: '250px', height: '200px', alignContent:'center', padding:'15px' }} />
        
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Nombres" defaultValue={Nombres} fullWidth disabled />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Apellidos" defaultValue={Apellidos} fullWidth disabled />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Edad" defaultValue={Edad} fullWidth disabled />
          </Grid>
          <Grid item xs={6}>
            <TextField label="DNI" defaultValue={DNI} fullWidth disabled />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Correo" defaultValue={Correo} fullWidth disabled />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Celular" defaultValue={Celular} fullWidth disabled />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Distrito" defaultValue={Distrito} fullWidth disabled />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Dirección" defaultValue={Dirección} fullWidth disabled />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Contraseña" defaultValue={Contraseña} fullWidth disabled />
          </Grid>
        </Grid>
        <Button onClick={handleClose} variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
          Cerrar
        </Button>
      </div>
    </Modal>
  );
};

export default VerPerfil;
