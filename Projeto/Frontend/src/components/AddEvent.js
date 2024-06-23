import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [organizerId, setOrganizerId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.get('http://localhost:8800/auth/user', { withCredentials: true });

      const response = await axios.post('http://localhost:8800/events/create', {
        title,
        description,
        date,
        organizer_id: user.data.id
      });

      setTitle('');
      setDescription('');
      setDate('');
      setOrganizerId('');
      alert('Evento cadastrado com sucesso!');
      navigate('/');
    } catch (e) {
      console.error('Erro ao adicionar evento: ', e);
      alert('Erro ao cadastrar evento.');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit" variant="contained" color="primary">
          Registrar Evento
        </Button>
      </form>
    </Container>
  );
}

export default AddEvent;
