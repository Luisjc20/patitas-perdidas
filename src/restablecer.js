import React, { useState } from 'react';
import { Modal, TextField, Button, Link, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

function PasswordResetModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Email, 2: Code, 3: New Password
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setStep(1);
    setEmail('');
    setCode('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleSubmitEmail = () => {
    // Aquí puedes agregar la lógica para enviar el correo con el código
    setStep(2);
  };

  const handleSubmitCode = () => {
    // Aquí puedes verificar si el código es correcto
    if (code === '789') {
      setStep(3);
    } else {
      alert('El código ingresado es incorrecto');
    }
  };

  const handleSubmitPassword = () => {
    // Aquí puedes agregar la lógica para actualizar la contraseña
    alert('Contraseña actualizada exitosamente');
    handleClose();
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Typography variant="h5" gutterBottom>Restablecer Contraseña</Typography>
            <TextField
              label="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button onClick={handleSubmitEmail} variant="contained" color="primary">
              Enviar código
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h5" gutterBottom>Verificar Código</Typography>
            <TextField
              label="Código"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button onClick={handleSubmitCode} variant="contained" color="primary">
              Verificar código
            </Button>
          </>
        );
      case 3:
        return (
          <>
            <Typography variant="h5" gutterBottom>Establecer Nueva Contraseña</Typography>
            <TextField
              label="Nueva contraseña"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Confirmar contraseña"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button onClick={handleSubmitPassword} variant="contained" color="primary">
              Actualizar contraseña
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Link href="#" color="primary" variant="body2" style={{ color: 'orange' }} onClick={handleOpen}>
        ¿Olvidó su contraseña?
      </Link>
      <Modal open={open} onClose={handleClose}>
        <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',  // Cambia el color de fondo del modal
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Agrega una sombra al modal
            padding: '24px', // Ajusta el relleno del modal
            maxWidth: 400 
        }}>
            {renderStepContent()}
            <Button startIcon={<CancelIcon />} onClick={handleClose} color="error">Cancelar</Button>
        </div>
      </Modal>
    </>
  );
}

export default PasswordResetModal;



