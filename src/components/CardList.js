import React from 'react';
import Card from './Card'


//{robots} as CardList recieves robots now in "index.js" we can destructure it here

//these things are known as pure or deterministic components
const CardList=({robots}) => {
	const cardArray=robots.map((user,i) => {
		return (
				<Card 
				key={robots[i].id} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email} 
				/>
			);
	})
	return (
		<div> 
		    {cardArray}
		</div>
	);
}

export default CardList;