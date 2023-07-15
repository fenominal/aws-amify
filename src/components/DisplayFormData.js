import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

const DisplayFormData = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await API.graphql({
          query: `
            query ListForms {
              listForms {
                items {
                  id
                  name
                  email
                  message
                }
              }
            }
          `,
        });
        const formItems = response.data.listForms.items;
        setForms(formItems);
      } catch (error) {
        console.log('Error retrieving form data:', error);
      }
    };

    fetchFormData();
  }, []);

  return (
    <div>
      {forms.map((form) => (
        <div key={form.id}>
          <p>Name: {form.name}</p>
          <p>Email: {form.email}</p>
          <p>Message: {form.message}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayFormData;
