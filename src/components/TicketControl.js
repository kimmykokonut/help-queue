import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false, 
      mainTicketList: [] //add this prop and pass down as prop to TicketList. empty so don't start with fake tickets
    };
  }
  handleClick = () => {
    this.setState(prevState =>({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }
  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList, formVisibleOnPage: false});
  } //false so user sees queue again, not form
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />; //passing handle() down to NewtickForm as prop called onNewTicketCreation
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList}/>; //passing down prop to TicketList child
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