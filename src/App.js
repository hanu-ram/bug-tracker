import React from 'react';
import './App.css';
import TicketForm from './components/TicketForm';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Tracker</h1>
        <TicketForm></TicketForm>
      </div>
    </div>
  );
}

export default App;
