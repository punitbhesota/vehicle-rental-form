import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Step1 = ({ nextStep, setFormData }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'firstName') setFirstName(value);
    else if (name === 'lastName') setLastName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ firstName, lastName });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1 sm:w-90 md:w-1/2 lg:w-1/3">
       <div className="text-3xl font-sans ">First, What's your name ?</div>
      <TextField
        label="First Name"
        variant="outlined"
        margin="normal"
        fullWidth
        name="firstName"
        value={firstName}
        onChange={handleChange}
        required
        className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <TextField
        label="Last Name"
        variant="outlined"
        margin="normal"
        fullWidth
        name="lastName"
        value={lastName}
        onChange={handleChange}
        required
        className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <Button disabled={!firstName || !lastName} variant="contained" disableElevation sx={{textTransform:"none"}} type="submit" className="bg-[gray] text-white px-4 py-2 rounded-md hover:bg-gray-700">
        Next
      </Button>
    </form>
  );
};

export default Step1;
