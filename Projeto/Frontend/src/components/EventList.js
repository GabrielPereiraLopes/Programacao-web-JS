import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { Grid, Container } from '@mui/material';
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8800/events');
      setEvents(response.data);
    } catch (e) {
      console.error('Erro ao buscar eventos: ', e);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/events/${id}`);
      fetchEvents();
    } catch (e) {
      console.error('Erro ao deletar evento: ', e);
    }
  };

  const handleEdit = () => {
    fetchEvents();
  };

  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        {events.map(event => (
          <Grid item xs={12} sm={6} md={4} key={event.id} style={{marginTop: 20}}>
            <EventCard event={event} onDelete={handleDelete} onEdit={handleEdit} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default EventList;
