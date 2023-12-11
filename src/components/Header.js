import React from "react";
import ticketsImage from "./../img/tickets.jpg";

function Header(){
  return(
    <React.Fragment>
      <h1>Help Queue</h1>
      <img height="300px" src={ticketsImage} alt="A roll of tickets"/>
    </React.Fragment>
  );
}

export default Header;