# Vehicle Rental Form Project

This repository contains a project for creating a form that collects user information and data about the vehicle to rent, along with the rental dates. The project consists of both backend and frontend components.

## Backend

### Stack Used
- Node.js with Express.js framework
- SQL-based database (PostgreSQL)
- Sequelize ORM

### Setup Instructions
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Since a Cloud Database is used, there's no need to set up the database manually. Simply run migrations and seed the initial data.
4. Run migrations to set up the database schema using `npm run migrate`.
5. Seed initial data into the database using `npm run seed`.
6. Start the development server using `npm run dev`.

### APIs
- **Vehicle API**: Consists of APIs such as getVehicleTypes, getVehicles etc.
- **Booking API**: Receives relevant data for booking a vehicle and ensures no overlapping booking for same vehicle.


## Frontend

### Stack Used
- React.js
- Material-UI for theming
- Tailwind CSS for utility classes

### Setup Instructions
1. Navigate to the `frontend` directory.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

### Form Interface
The frontend provides a form-based interface with one question per screen. Users can proceed to the next question only after answering the current one. 

#### Questions in the Form
1. **Name**: Two input boxes for capturing the first and last name.
2. **Number of Wheels i.e. Two Wheeler or Four Wheeler**: Radio button with options 2 and 4.
3. **Type of Vehicle**: Radio button displaying vehicle types fetched from the database based on number of wheels.
4. **Specific Model**: Radio button displaying vehicle models based on vehicle type.
5. **Date Range Picker**: Allows users to select the start and end date for booking the vehicle.
