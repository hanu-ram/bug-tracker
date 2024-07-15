import React, { useState } from "react";

export default function TicketForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('1');

  const priorityLabels = {
    1: 'Low',
    2: 'Medium',
    3: 'High'
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setPriority('1');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>

      <div>
        <label><input className="form-input" type="text" value={title} onChange={e => setTitle(e.target.value)} />Title</label>
      </div>

      <div>
        <label><input className="form-input" type="textarea" value={description} onChange={e => setDescription(e.target.value)} />Description</label>
      </div>


    </form>
  );
}