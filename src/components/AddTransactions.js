import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalStateSimple'



const AddTransactions = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const { addTransactions } = useContext(GlobalContext)
    const onSubmit = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount,
            // Math
        }
        addTransactions(newTransaction)
        setText('')
        setAmount('')
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} placeholder="Enter text..." onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransactions
