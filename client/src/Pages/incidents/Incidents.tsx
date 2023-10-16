import React, { useEffect, useState } from 'react';
import { Container } from './style';
import { Incident } from './models/incident';
import { List } from './components/list';

export const Incidents = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:5000/`);

    socket.onopen = () => {
      console.log('Соединение с сокетом  установлено');
    };

    socket.onmessage = (event) => {
      let msg = JSON.parse(event.data);
      switch (msg.method) {
        case 'new_incident':
          setIncidents((p) => [msg.data, ...p]);
          break;
      }
    };
  }, []);

  return (
    <Container>
      <List incidents={incidents} />
    </Container>
  );
};
