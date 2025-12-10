import React, { useState } from "react";
import type { CardData } from "../services/GetCardDatas";

const Cards = (prop: CardData) => {
    const [flip, setFlipped] = useState(false);
  return (
    <>
      <div className="flip-card" onClick={() => setFlipped(!flip)}>
        <div className="flip-card-inner" style={{transform: flip ? "rotateY(180deg)" : ""}}>
          <div className="flip-card-front">
            <p>{prop.question}</p>
          </div>
          <div className="flip-card-back">
            <header>{prop.id + 1}</header>
            <section>{prop.answer}</section>
            <div>
                {/* <button onClick={prop.onNextCard}>piipa</button> */}
                {/* <button onClick={prop.onNextCard}>x</button> */}
                <i className="fa-regular fa-circle-check" onClick={prop.onNextCard} style={{color: "green"}}></i>
                <i className="fa-regular fa-circle-xmark" onClick={prop.onNextCard} style={{color: "red"}}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
