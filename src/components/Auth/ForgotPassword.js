import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

const ForgotPassword = () => {
  const history = useHistory();

  const [newPassword, setNewPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/newPassword', {
        newPassword,
      });
      if (response) {
        alert('Password change successful');
        history.push('/login');
      }
    } catch (err) {
      alert('Error! Please try again');
    }
  };

  return (
    <div className="login-component">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </Form.Group>
        </Form.Row>
        <Button type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
