import React, { useState } from 'react';
import {FaVoteYea} from 'react-icons/fa';

interface PropsSurvey {
    bathroom: number,
    kitchen: number,
    bedroom: number
}

const Survey: React.FC = () => {
    const [votes, setVotes]=useState<PropsSurvey>({
        bathroom: 3656,
        kitchen: 3737,
        bedroom: 2073
    })

    const handleVote=(room: keyof PropsSurvey) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [room]: prevVotes[room] + 1
        }))
    }
    return (
        <section className='sect'>
            <div className='survey-center'>
                <h2 className='head5'>
                    <span>/</span>Survey
                </h2>
            <h3>most important room in the house?</h3>
            </div>
            <ul>
                <li className='item'>
                    <div className='key'>BA</div>
                    <div>
                        <h4>bathroom</h4>
                        <p>
                            {votes.bathroom} votes
                        </p>
                    </div>
                    <button className='buttonVote' onClick={() => handleVote('bathroom')}>
                        <FaVoteYea />
                    </button>
                </li>
                <li className='item'>
                    <div className='key'>KI</div>
                    <div>
                        <h4>kitchen</h4>
                        <p>
                            {votes.kitchen} votes
                        </p>
                    </div>
                    <button className='buttonVote' onClick={() => handleVote('kitchen')}>
                        <FaVoteYea />
                    </button>
                </li>
                <li className='item'>
                    <div className='key'>BE</div>
                    <div>
                        <h4>bedroom</h4>
                        <p>
                            {votes.bedroom} votes
                        </p>
                    </div>
                    <button className='buttonVote' onClick={() => handleVote('bedroom')}>
                        <FaVoteYea />
                    </button>
                </li>
            </ul>
        </section>
    )
}

export default Survey