import CardEditor from "./CardEditor";
import React, {useState} from "react";

const App = (props) => {

  const [cards, setCards] = useState([
    {front: "door", back: "something you can open"},
    {front: "DALI CTO", back: "Pape"}

  ])

  const addCard = (card) => {
    const newCards = (cards.slice().concat(card))
    setCards(newCards)
  }

  const deleteCard = (index) => {
    const newCards = cards.slice();
    newCards.splice(index, 1);
    setCards(newCards)
  }

  return (
    <CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard}/>
  );
}

export default App;
