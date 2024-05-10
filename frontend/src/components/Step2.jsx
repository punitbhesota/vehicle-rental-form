import React, { useState } from 'react';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Radio } from '@mui/material';

const Step2 = ({ nextStep, setFormData, formData }) => {
    const [type, setType] = useState('');

    const handleChange = (event) => {
        setType(event.target.value);
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({ ...formData, type });
        nextStep();
    };
    

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:w-90 md:w-1/2 lg:w-1/3">
    <div className="text-3xl font-sans ">Two Wheeler or Four Wheeler ?</div>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group">
            <FormControlLabel value="bike" onChange={handleChange} control={<Radio />} label="2" />
            <FormControlLabel value="car" onChange={handleChange} control={<Radio />} label="4" />
        </RadioGroup>
        <Button disabled={!type} variant="contained" disableElevation type="submit" className="rounded-md" sx={{textTransform:"none"}}>
        Next
        </Button>
    </form>
  );
};

export default Step2;
