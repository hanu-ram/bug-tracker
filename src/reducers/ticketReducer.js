export default function ticketReducer ( state, action )
{
  switch ( action.type )
  {
    case "ADD_TICKET":
      return { ...state, tickets: [ ...state.tickets, action.payload ] };
    case "UPDATE_TICKET":
      return {
        ...state, tickets: state.tickets.map( ticket => ticket.id === action.payload.id ? action.payload : ticket ),
        updatePayload: null
      };
    case "DELETE_TICKET":
      {
        if ( state.updatePayload && state.updatePayload.id === action.payload.id )
        {
          return { ...state, tickets: state.tickets.filter( ticket => ticket.id !== action.payload.id ), updatePayload: null };
        }
        else
        {
          return { ...state, tickets: state.tickets.filter( ticket => ticket.id !== action.payload.id ) }
        }
      }
    case "SET_UPDATE_MODE":
      return { ...state, updatePayload: action.payload };
    case "CLEAR_UPDATE_MODE":
      return { ...state, updatePayload: null };
    case "SORT_PREFERENCES":
      return { ...state, sortPreferences: action.payload }
    default:
      return state;
  }
}