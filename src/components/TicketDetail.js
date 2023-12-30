import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/theme-context';

function TicketDetail(props) {
  const { ticket, onClickingDelete } = props; //obj destructure so no need props.ticket.location
  const theme = useContext(ThemeContext); //create consumer

  if (!theme) {
    throw new Error("Themecontext must be used within a Themecontext.Provider!");
  }

  const styles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  }

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button style={styles} onClick={ props.onClickingEdit }>Update ticket</button>
      <button style={styles} onClick={() => onClickingDelete(ticket.id) }>Close Ticket</button>
      <hr/>
    </React.Fragment>
  );
}
TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};
export default TicketDetail;