import React from 'react';
import Card from 'react-bootstrap/Card';

const EboardCard = ({ member }) => (
  <Card style={{ width: '18rem', margin: '10px' }}>
    <Card.Img variant="top" src={member.image} alt="lit"/>
    <Card.Body>
      <Card.Title>{member.name}</Card.Title>
      <Card.Text>{member.role}</Card.Text>
    </Card.Body>
  </Card>
);

export default EboardCard;