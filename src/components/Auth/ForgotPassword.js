import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
  const history = useHistory();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSubmit = () => {
    history.push('/login');
  };

  return (
    <div className="login-component">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
              type="password"
              placeholder="Enter old password"
            />
          </Form.Group>
        </Form.Row>
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
          Change
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
