import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';
import { useLocation } from 'react-router-dom';

const Activation = () => {
  const history = useHistory();
  const location = useLocation();

  const [activation, setActivation] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (location.state) {
      try {
        const response = await axios.post('/auth/activate', {
          userId: location.state.id,
          activationCode: activation,
        });
        if (response.status === 200) {
          alert('Activation Successful');
          history.push('/');
        }
      } catch (err) {
        console.log(err);
        alert('Error! Please try again');
      }
    }
  };

  return (
    <div className="login-component">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCode">
            <Form.Label>Activation Code</Form.Label>
            <Form.Control
              type="text"
              value={activation}
              onChange={(e) => setActivation(e.target.value)}
              placeholder="Enter activation code"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="d-flex justify-content-between">
          <Button type="submit" onClick={onSubmit}>
            Submit
          </Button>
          <Button type="submit" onClick={() => history.push('/')}>
            Continue Anyway
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default Activation;
