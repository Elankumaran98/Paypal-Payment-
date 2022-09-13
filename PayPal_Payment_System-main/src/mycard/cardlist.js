import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Card from "./card";

const CardList = (props) => {
  console.log(props);
  const deleteCardHandler = (id) => {
    props.getCardId(id);
  };

  const renderCardList = props.cards.map((card) => {
    return (
      <Card
        card={card}
        clickHandler={deleteCardHandler}
        key={card.id}
      ></Card>
    );
  });
  return (
    <div className="ui phone list p-3">
        <h2 className="p-5">
          Card List :
          <Link to="/add">
            <Button className="primary mx-auto">Add Card</Button>
          </Link>
        </h2>
        {renderCardList}
      </div>
  );
};
export default CardList;
