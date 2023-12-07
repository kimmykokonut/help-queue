import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ResusableForm';

function NewTicketForm(props) {
  function handleNewTicketFormSubmission(e) {
    e.preventDefault();
    // console.log(e.target.names.value);
    // console.log(e.target.location.value);
    // console.log(e.target.issue.value);
    props.onNewTicketCreation({  //props, not this. b/c func comp not class comp.
      names: e.target.names.value,
      location: e.target.location.value,
      issue: e.target.issue.value,
      id: v4() //create unique ID thru uuid
      //numberOfStudents: parseInt(e.target.numberOfStudents.value) //to get # from form
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Halp!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;