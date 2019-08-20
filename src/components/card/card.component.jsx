import React from 'react';
import './card.styles.css'
export const Card = props => ( 
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x200`}/>
        <h2 key={props.monster.id}>{ props.monster.name }</h2>
    </div>
);