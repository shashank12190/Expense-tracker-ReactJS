import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transcation from './Transcation'

const TransctionList = () => {
    const { transcations } = useContext(GlobalContext)
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transcations.map(transcation => (<Transcation transcation={transcation} key={transcation.id} />))}
            </ul>
        </>
    )
}

export default TransctionList
