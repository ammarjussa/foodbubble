import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';
import { useDispatch } from 'react-redux';
import { login } from '../../actions';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post('/auth/login', {
    //     email,
    //     password,
    //   });
    //   alert(response);
    //   history.push('/');
    // } catch (err) {
    //   alert(err);
    // }
    if (email === 'ammar') {
      dispatch(login({ email, password }));
    }
    history.push('/');
  };

  return (
    <div className="login-component">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </Form.Group>
        </Form.Row>
        <Button type="submit" onClick={onSubmit}>
          Login
        </Button>
      </Form>
      <div className="txt-register">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
      <div className="txt-register">
        <Link to="/forgotPass">Forgotten password?</Link>
      </div>
    </div>
  );
};

export default Login;
