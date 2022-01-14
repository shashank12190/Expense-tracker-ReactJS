import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transcation = ({ transcation }) => {
    const { deleteTranscation } = useContext(GlobalContext)

    // Get sign
    const sign = transcation.amount < 0 ? '-' : '+';
    return (
        <div>
            <li className={transcation.amount < 0 ? 'minus' : 'plus'}  >
                {transcation.text} <span>{sign}${Math.abs(transcation.amount)}</span><button className="delete-btn" onClick={() => deleteTranscation(transcation.id)}>x</button>
            </li>
        </div>
    )
}

export default Transcation
