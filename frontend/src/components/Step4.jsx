import React, { useState, useEffect } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { CircularProgress, Radio } from '@mui/material';
import { API_URL } from '../config/config';
import { debounce } from '../utils/utils';

const Step4 = ({ nextStep, setFormData, formData }) => {
  const vehicleTypeId = formData.vehicleTypeId;
  const [vehicles, setVehicles] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch vehicles from database based on the selected vehicle Type
  const fetchVehicles = async () => {
    try {
        setIsLoading(true)
        const response = await fetch(`${API_URL}/vehicles/${vehicleTypeId}`);
        const data = await response.json();
        setVehicles(data);
        setIsLoading(false)
    } catch (error) {
        setIsLoading(false)
        console.error("Error fetching vehicles",error)
    } 
  };

  const debouncedFetchVehicles = debounce(fetchVehicles, 500);

  useEffect(() => {  
      debouncedFetchVehicles();
  },[]);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...formData, vehicleId: selected });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:w-90 md:w-1/2 lg:w-1/3">
        <div className="text-3xl font-sans ">Now, Select Vehicle Model</div>
        {isLoading ? (
        <div className="flex justify-center items-center h-20">
          <CircularProgress color="primary" />
        </div>
        ) : (
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group">
        {vehicles.map((type) => (
            <FormControlLabel
            key={type.id}
            value={type.id}
            control={<Radio/>}
            onChange={handleChange}
            label={type.model}
            />
        ))}
        </RadioGroup>
        )
        }
      <Button variant="contained" type="submit" disabled={!selected} className="rounded-md" sx={{textTransform:"none"}}>
        Next
      </Button>
    </form>
  );
};

export default Step4;