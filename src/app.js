import React from 'react';
import FormComponent from './components/FormComponent';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Form</h1>
      <FormComponent />
      <Link to="/form-data">View Form Data</Link>
    </div>
  );
}

export default App;
