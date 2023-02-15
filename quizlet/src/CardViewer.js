import React, { useState } from 'react';

function CardViewer(props) {
  const [index, setIndex] = useState(0);
  console.log(props.cards[index].front);
  console.log(props.cards[index].back);
  const [front, setFront] = useState(true);

  return (
    <div>
      <h2>card viewer</h2>

      <h3> progress bar</h3>
      <h3> card {index + 1}/ {props.cards.length} </h3>
      {front ? <h2>{props.cards[index].front}</h2> : <h2>{props.cards[index].back}</h2>}
      <button type="button" onClick={() => setFront(!front)}>flip card</button>
      <button type="button" disabled={index === 0} onClick={() => setIndex(index - 1)}>previous card</button>
      <button type="button" disabled={index + 2 > props.cards.length} onClick={() => setIndex(index + 1)}>next card</button>

    </div>

  );
}
export default CardViewer;
