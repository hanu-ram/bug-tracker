import React from 'react'

export default function TicketItem ( { ticket, dispatch } )
{
  const { title, description, priority } = ticket;
  const priorityClass = {
    1: 'priority-low',
    2: 'priority-medium',
    3: 'priority-high'
  }
  return (
    <div className='ticket-item'>
      <div className={ `${ priorityClass[ priority ] }` }>
        <h3>{ title }</h3>
        <p>{ description }</p>
        <button
          className='button'
          onClick={ () => { dispatch( { type: 'DELETE_TICKET', payload: { id: ticket.id } } ) } }
        >Delete</button>
        <button className='button' onClick={ () => dispatch( { type: 'SET_UPDATE_MODE', payload: ticket } ) }>Edit</button>
      </div>
    </div>
  )
}
