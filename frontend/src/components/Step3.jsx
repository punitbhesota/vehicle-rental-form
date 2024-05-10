import React, { useState, useEffect } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import { Radio } from '@mui/material';
import { API_URL } from '../config/config';
import { debounce } from '../utils/utils';

const Step3 = ({ nextStep, setFormData, formData }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const type = formData.type

  // Fetch vehicle types from database based on the selected number of wheels
  const fetchVehicleTypes = async () => {
    try {
        setIsLoading(true); 
        const response = await fetch(`${API_URL}/vehicles/vehicle-types?type=${type}`);
        const data = await response.json();
        setVehicleTypes(data);
        setIsLoading(false); 
    } catch (error) {
        setIsLoading(false)
        console.error("Error fetching vehicle types",error)
    }
  };

  const debouncedFetchVehicleTypes = debounce(fetchVehicleTypes, 500);


  useEffect(() => {
    debouncedFetchVehicleTypes()
  },[]);

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...formData, vehicleTypeId: selectedType });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:w-90 md:w-1/2 lg:w-1/3">
        <div className="text-3xl font-sans ">Select Vehicle Type</div>
        {isLoading ? (
        <div className="flex justify-center items-center h-20">
          <CircularProgress color="primary"/>
        </div>
      ) : (
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {vehicleTypes.map((type) => (
            <FormControlLabel
              key={type.id}
              value={type.id}
              control={<Radio />}
              onChange={handleChange}
              label={type.name}
            />
          ))}
        </RadioGroup>
      )}
      <Button variant="contained" type="submit" disabled={!selectedType} className="rounded-md" sx={{textTransform:"none"}}>
        Next
      </Button>
    </form>
  );
};

export default Step3;
