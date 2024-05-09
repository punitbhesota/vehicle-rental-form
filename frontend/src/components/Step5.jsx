import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

const Step5 = ({ onSubmit, formData }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (value) => {
    setStartDate(value);
  };

  const handleEndDateChange = (value) => {
    setEndDate(value);
  };

  const handleSubmit = () => {
    let start = startDate.toDate()
    let end = endDate.toDate()
    onSubmit({...formData,startDate:start, endDate:end});
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/3 px-5 py-5">
        <div className="text-3xl font-sans ">Finally, Pick Date Range</div>
        <DatePicker
          label="Start Date"
          value={startDate}
          disablePast
          onChange={handleStartDateChange}
          renderInput={(params) => <TextField {...params} />}
          required
        />
        <DatePicker
          label="End Date"
          value={endDate}
          disablePast
          onChange={handleEndDateChange}
          renderInput={(params) => <TextField {...params} />}
          required
        />
        <Button variant="contained" onClick={handleSubmit} disabled={!startDate || !endDate} className="rounded-md" sx={{textTransform:"none"}}>
          Submit Booking
        </Button>
      </form>
  );
};

export default Step5;
