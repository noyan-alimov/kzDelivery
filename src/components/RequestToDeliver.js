import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

const RequestToDeliver = () => {
  return (
    <Jumbotron>
      <Form>
        <Form.Group>
          <Form.Label>From where</Form.Label>
          <Form.Control as="select">
            <option>Nur-Sultan</option>
            <option>Almaty</option>
            <option>Karaganda</option>
            <option>Atyrau</option>
            <option>Taraz</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>To where</Form.Label>
          <Form.Control as="select">
            <option>Nur-Sultan</option>
            <option>Almaty</option>
            <option>Karaganda</option>
            <option>Atyrau</option>
            <option>Taraz</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>What to deliver</Form.Label>
          <Form.Control type="text" placeholder="Document, Gift..." />
        </Form.Group>
        <Form.Group>
          <Form.File label="The photo of it" />
        </Form.Group>
        <Form.Group>
          <Form.Label>When</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};

export default RequestToDeliver;
