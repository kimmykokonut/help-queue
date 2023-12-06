import React from 'react';

function NewTicketForm() {
  function handleNewTicketFormSubmission(e) {
    e.preventDefault();
    console.log(e.target.names.value);
    console.log(e.target.location.value);
    console.log(e.target.issue.value);
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

export default NewTicketForm;