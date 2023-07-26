import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return(
        <div>
            {robots.map((val, i) => {
                return(
                    <Card 
                    key={robots[i].id}
                    id={robots[i].id} 
                    name={robots[i].name} 
                    username={robots[i].username} 
                    email={robots[i].email}
                    />
                )
            })}
        </div>
    )
}

export default CardList;