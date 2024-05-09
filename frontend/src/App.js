// @ts-ignore
import { useState } from 'react';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { API_URL } from './config/config';
import { CircularProgress, Snackbar } from '@mui/material';
import Step1 from './components/Step1.jsx'
import Step2 from './components/Step2.jsx';
import Step3 from './components/Step3.jsx';
import Step4 from './components/Step4.jsx';
import Step5 from './components/Step5.jsx';


function App() {
  
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading,setIsLoading] = useState(false);
  const [message,setMessage] = useState('')
  const [openMessage,setOpenMessage] = useState(false)

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleFormSubmit = async(data) => {
    try {
      setIsLoading(true)
      setCurrentStep(1)
      const response = await fetch(`${API_URL}/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const res = await response.json()
      setMessage(res.message)
      setOpenMessage(true)
      setIsLoading(false)
    } 
    catch (error) {
      setMessage('Unable to book now please try again later')
      setIsLoading(false)
      setOpenMessage(true)
      console.log('Error Booking',error)
    }
  };

  const renderStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep} setFormData={setFormData} />;
      case 2:
        return <Step2 nextStep={nextStep} setFormData={setFormData} formData={formData} />;
      case 3:
        return <Step3 nextStep={nextStep} setFormData={setFormData} formData={formData} />;
      case 4:
        return <Step4 nextStep={nextStep} setFormData={setFormData} formData={formData} />;
      case 5:
        return <Step5 setFormData={setFormData} onSubmit={handleFormSubmit} formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App flex justify-center items-center h-screen">
      {isLoading?
      <div className="flex justify-center items-center h-20">
        <CircularProgress color="primary"/>
      </div>:
      renderStep(currentStep)}

      <Snackbar
        open={openMessage}
        autoHideDuration={3000}
        onClose={()=>setOpenMessage(false)}
        message={message}
      />
      </div>
    </LocalizationProvider>
  );
}

export default App;
