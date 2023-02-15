// import React, {useState} from 'react';
// useState = keeps track of index
// card array

// const CardViewer = (props) => {

//     const [front,setFront] = useState('')
//     const [back, setBack] = useState('')
//     const cardList = props.cards.map((card, index) => {
//         return (
//          <tr>
//             <td>{card.front}</td>
//             <td>{card.back}</td>
//             <td><button onClick={() => props.deleteCard(index)}> delete card</button></td>

//         </tr>
//         )
//     })

//     const goBack = (cardList) => {
//         // get index of current card
//         // subtract 1
//         // get new card
//         // const newCards = cards.slice();
//         // newCards.splice(index, 1);
//         props.cardList.find(index - 1);

//         }

//     return (
//     <div>
//         <h2> Card Viewer</h2>
//         <table>
//             <thead>
//                 <tr>
//                     <th> Next Card</th>
//                     <th> Previous Card</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {cardList}
//             </tbody>
//         </table>
//         <br/>
//         <button onClick= {() => goBack ({index})}> Next Card </button>
//         <button onClick= {() => ({front, back})}> Previoius Card </button>



//     </div>
//     )
// }

// export default CardViewer;