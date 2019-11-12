import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, index) => {
                    // note that everytime we perform a loop in react, we have to give each item that's been iterated a unique key. this is so that in the case that if any said item in the list is deleted, react can know to only just remove that from the view without having to re-render the DOM. and the most unique value to give the key prop is best the index of the loop or the id in our robots.js since those in their own self are unique already
                    return  (
                        <Card 
                            key={ user.id } 
                            id={ user.id } 
                            name={ user.name } 
                            email={ user.email }
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;