import React, { useState } from 'react';
import { API } from 'aws-amplify';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async () => {
    try {
      const formData = { name, email, message };
      await API.graphql({
        query: `
          mutation CreateForm($input: CreateFormInput!) {
            createForm(input: $input) {
              id
              name
              email
              message
            }
          }
        `,
        variables: {
          input: formData,
        },
      });
      // Form submitted successfully
    } catch (error) {
      console.log('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
