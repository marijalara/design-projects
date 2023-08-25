import React, { useEffect, useState } from 'react';
import {data} from '../data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

const Reviews: React.FC = () => {
    const [people]=useState(data)
    const [index, setIndex]=useState(1)

    useEffect(() => {
        const lastIndex=people.length - 1
        if(index < 0) {
            setIndex(lastIndex)
        }
        if(index > lastIndex) {
            setIndex(0)
        }
    },[index, people])

    useEffect(() => {
        let slider=setInterval(() => {
            setIndex(index + 1)
        },5000)
        return () => {
            clearInterval(slider)
        }
    },[index])
  
    return (
        <div className='section'>
        <div className='reviews'>
            <h2>
                <span>/</span>Reviews
            </h2>
        </div>
        <div className='section-center'>
            {people.map((person, indexPeople) => {
                let position='nextSlide'
                if(indexPeople === index) {
                    position='activeSlide'
                }
                if(indexPeople === index - 1 || (index === 0 && indexPeople ===people.length - 1)) {
                    position= 'lastSlide'
                }
                return (
                    <article className={position} key={person.id}>
                        <img src={person.image} alt={person.name} className='person-img' />
                        <h4>{person.name}</h4>
                        <p className='title'>{person.title}</p>
                        <p className='text'>{person.quote}</p>
                    </article>
                )
            })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
        </button>
        </div>
        </div>
    )
}

export default Reviews