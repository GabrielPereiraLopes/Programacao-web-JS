import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';

function EventCard({ event, onDelete, onEdit }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [date, setDate] = useState(event.date);
  const [organizerId, setOrganizerId] = useState(event.organizer_id);

  const handleEdit = async () => {
    try {
      await axios.put(`http://localhost:8800/events/${event.id}`, { title, description, date, organizer_id: organizerId });
      onEdit();
      setOpen(false);
    } catch (e) {
      console.error('Erro ao editar evento: ', e);
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(event.date).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Organizer ID: {event.organizer_id}
          </Typography>
        </CardContent>
        <Button onClick={() => setOpen(true)}>Edit</Button>
        <Button onClick={() => onDelete(event.id)}>Delete</Button>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Event</DialogTitle>
        <DialogContent>
          <TextField
            label="Título"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Descrição"
            fullWidth
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="Data"
            type="date"
            fullWidth
            margin="normal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="ID do Organizador"
            fullWidth
            margin="normal"
            value={organizerId}
            onChange={(e) => setOrganizerId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EventCard;
