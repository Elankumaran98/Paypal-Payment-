import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import AddCard from './mycard/addcard';
import CardList from './mycard/cardlist';
import CardDetails from './mycard/carddetails';
import CardForm from "./card/cardform";


function App() {
  const LOCAL_STORAGE_KEY = "cards";
  const [cards, setCards] = useState([]);
  const addCardHandiler = (card) => {
    console.log(card);
    setCards([...cards, { id: uuid(), ...card }]);
  };

  const removeCardHandler = (id) => {
    const newCardList = cards.filter((card) => {
      return card.id !== id;
    });
    setCards(newCardList);
  };

  useEffect(() => {
    const retriveCards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveCards) setCards(retriveCards);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
  }, [cards]);
  return (
    <div className="ui container">
      <Router>
      <CardForm/>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <CardList
                {...props}
                cards={cards}
                getCardId={removeCardHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props)=><AddCard {...props}
            addCardHandiler={addCardHandiler}/>}
          />

          <Route path="/card/:id" component={CardDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
