
import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f7f9fc;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2.5rem;
    color: #333;
  }
`;

const Section = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;

  h2 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    color: #555;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  input, textarea {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const WeatherWidget = styled.div`
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #e6f7ff;
  margin-top: 10px;
`;

function Dashboard() {
  const [feedback, setFeedback] = useState('');
  const [weather, setWeather] = useState({ temp: '27°C', condition: 'Sunny' }); 
  const [studentView, setStudentView] = useState({
    name: 'John Doe',
    seat: 'Row 5, Seat 12',
    time: '10:00 AM',
    achievements: ['Cum Laude']
  });

  const handleFeedbackSubmit = () => {
    console.log('Feedback Submitted:', feedback);
    alert('Thank you for your feedback!');
    setFeedback('');
  };

  return (
    <AppContainer>     

      <Section>
        <h2>Personalized View</h2>
        <p><strong>Name:</strong> {studentView.name}</p>
        <p><strong>Seat:</strong> {studentView.seat}</p>
        <p><strong>Time Slot:</strong> {studentView.time}</p>
        <p><strong>Achievements:</strong> {studentView.achievements.join(', ')}</p>
      </Section>

      <Section>
        <h2>Weather Widget</h2>
        <WeatherWidget>
          <p><strong>Temperature:</strong> {weather.temp}</p>
          <p><strong>Condition:</strong> {weather.condition}</p>
        </WeatherWidget>
      </Section>

      <Section>
        <h2>Feedback</h2>
        <textarea
          rows="4"
          placeholder="Share your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
      </Section>

      <Section>
        <h2>Help Desk</h2>
        <p>For assistance, contact us at:</p>
        <p>Email: support@convocation.com</p>
        <p>Phone: +123 456 7890</p>
      </Section>
    </AppContainer>
  );
}

export default Dashboard;