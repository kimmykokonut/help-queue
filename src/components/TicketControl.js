import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false, 
      mainTicketList: [], //add this prop and pass down as prop to TicketList. empty so don't start with fake tickets
      selectedTicket: null //if user clicks ticket, this updated to correct ticket to show
    };
  }
  handleClick = () => {
    this.setState(prevState =>({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }
  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      mainTicketList: newMainTicketList, 
      formVisibleOnPage: false
    });
  } //false so user sees queue again, not form
  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0]; 
    this.setState({selectedTicket: selectedTicket});
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket}/>
      buttonText= "Return to Ticket List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />; //passing handle() down to NewtickForm as prop called onNewTicketCreation
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />; //passing down prop and new method as prop to TicketList child
      buttonText = "Add Ticket";
      
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;