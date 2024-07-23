import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
export default function TicketForm ( { dispatch, updatePayload } )
{
  TicketForm.propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  const [ title, setTitle ] = useState( '' );
  const [ description, setDescription ] = useState( '' );
  const [ priority, setPriority ] = useState( '1' );

  const priorityLabels = {
    1: 'Low',
    2: 'Medium',
    3: 'High'
  };
  useEffect( () =>
  {
    if ( updatePayload )
    {
      setTitle( updatePayload.title )
      setDescription( updatePayload.description )
      setPriority( updatePayload.priority )
    } else
    {
      clearForm();
    }
  }, [ updatePayload ] )
  const clearForm = () =>
  {
    setTitle( '' );
    setDescription( '' );
    setPriority( '1' );
  };

  const handleSubmit = ( e ) =>
  {
    e.preventDefault();
    const ticketData = {
      id: updatePayload ? updatePayload.id : new Date().toISOString(),
      title,
      description,
      priority
    };
    dispatch( {
      type: updatePayload ? 'UPDATE_TICKET' : 'ADD_TICKET',
      payload: ticketData
    } )
    clearForm();
  };
  const handleCancel = ( e ) =>
  {
    e.preventDefault();
    dispatch( {
      type: 'CLEAR_UPDATE_MODE'
    } )
  }
  return (
    <form className="ticket-form" onSubmit={ handleSubmit }>

      <div>
        <label>Title <input className="form-input" type="text" value={ title } onChange={ e => setTitle( e.target.value ) } /></label>
      </div>

      <div>
        <label>Description <input className="form-input" type="textarea" value={ description } onChange={ e => setDescription( e.target.value ) } /></label>
      </div>

      <fieldset className="priority-fieldset">

        <legend>priority</legend>
        {
          Object.entries( priorityLabels ).map( ( [ value, label ] ) => (
            <label key={ value } className="priority-label">
              { label }
              <input type='checkbox' value={ value } checked={ priority === value } onChange={ ( e ) => setPriority( e.target.value ) } />
            </label>
          ) )
        }

      </fieldset>

      <button type="submit" className="button" onSubmit={ handleSubmit }>Submit</button>
      { updatePayload && <button type="submit" className="button" onSubmit={ handleCancel }>Cancel</button> }

    </form>
  );
}