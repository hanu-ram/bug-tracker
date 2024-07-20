import React, { useReducer } from 'react';
import './App.css';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';


function App() {
  const initialState = { tickets: [] };
  const [state, dispatch] = useReducer(ticketReducer, initialState);
  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Tracker</h1>
        <TicketForm dispatch={dispatch}></TicketForm>
      </div>
    </div>
  );
}

export default App;
