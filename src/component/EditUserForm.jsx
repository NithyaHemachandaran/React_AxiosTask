import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditUserForm({ user, onCancelEdit }) {
  const [userData, setUserData] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    address: {
      street: user.address.street,
      suite: user.address.suite,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
    phone: user.phone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the user data using PUT request to the mock API
    axios
      .put(`https://64f18c130e1e60602d23e95d.mockapi.io/user/${user.id}`, userData)
      .then((response) => {
        // Handle the success response here, if needed
        console.log('User updated successfully', response);
        // You can also update the local state if needed
        // setUserData(response.data);
        // Hide the edit form
        onCancelEdit();
      })
      .catch((error) => {
        // Handle errors here, if needed
        console.error('Error updating user', error);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="street">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            name="street"
            value={userData.address.street}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="suite">
          <Form.Label>Suite</Form.Label>
          <Form.Control
            type="text"
            name="suite"
            value={userData.address.suite}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={userData.address.city}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="zipcode">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            type="text"
            name="zipcode"
            value={userData.address.zipcode}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
        <Button variant="secondary" onClick={onCancelEdit}>
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default EditUserForm;
