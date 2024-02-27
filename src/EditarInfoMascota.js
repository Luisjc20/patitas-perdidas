import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CloseIcon from '@material-ui/icons/Close';

function EditarInfoMascota() {
  const [images, setImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [open, setOpen] = useState(true); // Estado para controlar la apertura y cierre del modal

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    setImages((prevImages) => [...prevImages, ...selectedFiles]);

    const selectedThumbnails = selectedFiles.map((file) => URL.createObjectURL(file));

    setThumbnails((prevThumbnails) => [...prevThumbnails, ...selectedThumbnails]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setThumbnails((prevThumbnails) => prevThumbnails.filter((_, i) => i !== index));
  };
  const generateDateOptions = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const options = [];

    for (let year = 2023; year <= currentYear; year++) {
      const endMonth = year === currentYear ? currentMonth : 12;
      for (let month = 1; month <= endMonth; month++) {
        const numDays = new Date(year, month, 0).getDate();
        for (let day = 1; day <= numDays; day++) {
          options.push({
            value: `${year}-${month}-${day}`,
            label: `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`,
          });
        }
      }
    }

    return options;
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h4" align="center">
          Editar información de mascota
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          {/* Columna izquierda */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre de la mascota"
              variant="outlined"
              fullWidth
              margin="normal"
            />
           <TextField
                  select
                  label="Fecha de pérdida"
                  variant="outlined"
                  fullWidth
                  margin="normal"
            >
                  {/* Opciones de fecha generadas dinámicamente */}
                  {generateDateOptions().map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
            </MenuItem>
            ))}
                </TextField>
            <TextField
              select
              label="Especie"
              variant="outlined"
              fullWidth
              margin="normal"
            >
              <MenuItem value="felino">Felino</MenuItem>
              <MenuItem value="canino">Canino</MenuItem>
            </TextField>
            <TextField
              label="Raza"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Nro de contacto"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          {/* Columna derecha */}
          <Grid item xs={12} sm={6}>
            
            <TextField
              label="Dirección"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Datos Extras"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="image-upload"
              type="file"
              onChange={handleImageChange}
              multiple
            />
             <label htmlFor="image-upload">
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <AddPhotoAlternateIcon />
                  </IconButton>
                  Agregar imágenes
                </label>
                <Grid container spacing={1}>
                  {thumbnails.map((thumbnail, index) => (
                    <Grid item key={index}>
                      <img
                        src={thumbnail}
                        alt={`Thumbnail ${index}`}
                        style={{ width: 100, height: 100, marginRight: 5 }}
                      />
                      <IconButton onClick={() => removeImage(index)}>
                        <RemoveCircleIcon />
                      </IconButton>
                    </Grid>
                  ))}
                </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleClose} style={{ marginRight: 10 }}>
          Guardar
        </Button>
        <Button variant="contained" color="default" onClick={handleClose}>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditarInfoMascota;
