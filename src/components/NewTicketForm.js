import React from 'react';

function NewTicketForm() {
  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='name'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue' />
        <button type='submit'>Help!</button>
      </form>

      function handleNewTicketFormSubmission(e) {
        e.preventDefault();
        console.log(event.target.names.value);
        console.log(event.target.location.value);
        console.log(event.target.issue.value);
      }
    </React.Fragment>
  );
}

export default NewTicketForm;