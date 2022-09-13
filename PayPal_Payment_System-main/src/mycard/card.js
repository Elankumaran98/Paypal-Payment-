import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, cardHolderName, cardNumber, date, cvv } = props.card;
  return (
    <div className="item text-center bg-dark">
      <div className="content">
        <Link
          to={{
            pathname: `/card/${id}`,
            state: {
              card: props.card,
            },
          }}
        >
          <div className="h1 pb-4 pt-4">Card Holder Name :{cardHolderName}</div>
          <div className="h1 pb-4">Card Number:{cardNumber}</div>
          <div className="h1 pb-4">Date :{date}</div>
          <div className="h1 pb-4">CVV :{cvv}</div>
        </Link>
        <button type="button" className="btn btn-primary btn-sm "
          onClick={() => props.clickHandler(id)}
          style={{ color: "red", marginTop: "7px" }}>Delete</button>
        <i
          className="trash icon py-3 "
          onClick={() => props.clickHandler(id)}
          style={{ color: "red", marginTop: "7px" }}
        ></i>
      </div>
    </div>
  );
};
export default Card;
