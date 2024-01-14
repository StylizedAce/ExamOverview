import React, { useState } from 'react';

const FormExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form data (e.g., send it to a server)
    console.log('Submitted Form Data:', formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
