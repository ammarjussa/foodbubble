import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/user/', {
        name: firstName + ' ' + lastName,
        email,
        phone,
        password,
      });

      if (response.status === 200) {
        alert('Registered Successfully');
        history.push('/login');
      }
    } catch (err) {
      alert('The email or phone is already registered');
    }
  };

  return (
    <div className="register-component">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              placeholder="Enter first name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              placeholder="Enter last name"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Enter password"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              value={phone}
              placeholder="Enter phone number"
            />
          </Form.Group>
        </Form.Row>
        <Button type="submit" onClick={onSubmit}>
          Register
        </Button>
      </Form>
      <div className="txt-login">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
