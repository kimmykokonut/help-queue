import React from 'react';
import ReusableForm from './ResusableForm';

function EditTicketForm (props) {
  return (
    <React.Fragment>
      <ReusableForm
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}
export default EditTicketForm;