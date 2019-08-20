import React from 'react';
import './cardlist.styles.css';
import { Card } from '../card/card.component.jsx';

export const Cardlist = (props) => {
    return <div className='card-list'>
        {
            props.monsters.map(monster => ( 
            <Card monster={monster}/>
            //<h1 key={monster.id}> {monster.name} </h1>
        ))}
    </div>
}