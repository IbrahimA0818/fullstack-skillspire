import { useState, useEffect } from 'react';
import { addAppointments, getAppointments } from './api/api';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await getAppointments();
      setAppointments(response.data);
    } catch (error) {
      setMessage("Error loading appointments: " + error.message);
    }
  };

  const handleSubmit = async () => {
    const title = prompt("Enter appointment title:");
    if (!title) return;
    
    const description = prompt("Enter appointment description:");
    if (!description) return;
    
    const date = prompt("Enter appointment date (YYYY-MM-DD):");
    if (!date) return;

    try {
      const newAppointment = { title, description, date };
      await addAppointments(newAppointment);
      setMessage("Appointment added successfully!");
      fetchAppointments(); // Refresh the list
    } catch (error) {
      setMessage("Error adding appointment: " + error.message);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Appointment Manager</h1>
      <button onClick={handleSubmit}>Add New Appointment</button>
      {message && <p>{message}</p>}
      
      <h2>All Appointments:</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        appointments.map((appointment, index) => (
          <div key={appointment._id || index} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <h3>{appointment.title}</h3>
            <p><strong>Description:</strong> {appointment.description}</p>
            <p><strong>Date:</strong> {appointment.date}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;