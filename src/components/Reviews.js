import React, { useState } from 'react';
import {data} from '../data';

const Reviews = () => {
    const [people, setPeople]=useState(data)
    return (
        <article>
            {people.map((person) => (
                <div key={person.id}>
                <img className='person-img' src={person.image}/>
                <h4>{person.name}</h4>
                <p className='title'>{person.title}</p>
                <p className='text'>{person.quote}</p>
                </div>
            ))}
        </article>
    )
}

export default Reviews