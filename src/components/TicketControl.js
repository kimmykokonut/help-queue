import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import { findAllByTestId } from "@testing-library/react";

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false 
    };
  }

  render(){
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }

}

export default TicketControl;