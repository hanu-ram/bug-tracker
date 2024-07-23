import React, { useReducer } from 'react';
import './App.css';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';
import TicketList from './components/TicketList';
import sortAlgo from './utilities/sortUtils';

function App ()
{
  const initialState = {
    tickets: [],
    updatePayload: null,
    sortPreferences: "High To Low"
  };
  const [ state, dispatch ] = useReducer( ticketReducer, initialState );
  let sortedTickets = sortAlgo( state.tickets, state.sortPreferences )
  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Tracker</h1>
        <TicketForm dispatch={ dispatch } updatePayload={ state.updatePayload }></TicketForm>
        { state.tickets.length > 0 &&
          <div className='results'>
            <h2>All Tickets</h2>
            <select value={ state.sortPreferences } onChange={ e => dispatch( { type: "SORT_PREFERENCES", payload: e.target.value } ) }>
              <option value="High To Low">High To Low</option>
              <option value="Low To High">Low To High</option>
            </select>
            <TicketList tickets={ sortedTickets } dispatch={ dispatch }></TicketList>
          </div>
        }

      </div>
    </div>
  );
}

export default App;
