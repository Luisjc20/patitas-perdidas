import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ListaMascotas({ open, handleClose }) {
    
  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Reporte de mis Mascotas
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre de mascota</TableCell>
                <TableCell>Fecha de pérdida</TableCell>
                <TableCell>Fecha de encuentro</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Observaciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Bobby</TableCell>
                <TableCell>10/02/2023</TableCell>
                <TableCell></TableCell>
                <TableCell><HighlightOffIcon style={{ color: 'red' }} /></TableCell>
                <TableCell>Perdida cerca del parque</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Luna</TableCell>
                <TableCell>05/03/2023</TableCell>
                <TableCell>20/03/2023</TableCell>
                <TableCell><CheckCircleIcon style={{ color: 'green' }} /></TableCell>
                <TableCell>Encontrada en la avenida principal</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button variant="contained" color="default" onClick={handleClose}>
            Cerrar
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ListaMascotas;
