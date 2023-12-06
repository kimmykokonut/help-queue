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
      {props.ticketList.map((ticket, index) => //loop list passed from TickCont parent
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
        )}
    </React.Fragment>
  );
}

TicketList.propTypes = { //add this with new prop passed down
  ticketList: PropTypes.array
};

export default TicketList;