import React from "react";
import Ticket from "./Ticket";
import PropTypes from 'prop-types';

// dummy static list removed now adding state.
// const mainTicketList = [
//   {
//     names: 'Thato and Haley',
//     location: '3A',
//     issue: 'Firebase won\'t save record. Halp'
//   },
//   {
//     names: 'Sleater and Kinney',
//     location: '4B',
//     issue: 'Prop types are throwing an error.'
//   },
//   {
//     names: 'Imani and Jacob',
//     location: '9F',
//     issue: 'Child component isn\'t rendering.'
//   }
// ];

function TicketList(props) { //add props to get parent f()
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.ticketList).map((ticket) => 
        <Ticket
          whenTicketClicked = { props.onTicketSelection }
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id}/>
        )}
    </React.Fragment>
  );
}

TicketList.propTypes = { //add this with new prop passed down
  ticketList: PropTypes.object, //now obj was array
  onTicketSelection: PropTypes.func
};

export default TicketList;