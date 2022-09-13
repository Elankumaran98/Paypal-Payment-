import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const CardDetails=(props)=>{
    const { FirstName, LastName, Email, Phone}=props.location.state.card;
    return(
      <div className="container bg-info ">
          <div className="card centered">
              <div className="image">
              </div>
              <div className="content">
                  <div className="header ">{FirstName}</div>
                  <div className="header ">{LastName}</div>
                  <div className="header ">{Email}</div>
                  <div className="header">{Phone}</div>
              </div>
          </div>
          <div className="center-div">
              <Link to="/">
              <Button className="ui button blue center">
                  Back To Card List
              </Button>
              </Link>
          </div>
      </div>
    );
}
export default CardDetails;