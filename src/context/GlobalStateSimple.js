import { createContext, useState, useEffect } from 'react'
// import AppReducer from './AppReducer'

const transactionsArr = [
    // { id: 1, text: 'Flower', amount: -20 },
    // { id: 2, text: 'Salary', amount: 300 },
    // { id: 3, text: 'Book', amount: -10 },
    // { id: 4, text: 'Camera', amount: 150 }
]


//create Context

export const GlobalContext = createContext()



//Provider Components

export const GlobalProvider = ({ children }) => {
    const URL = "http://localhost:5000/transactions"

    const [transactions, setTransactions] = useState(transactionsArr)
    useEffect(() => {
        fetchFeedback()
    }, [])

    const deleteTransaction = async (id) => {
        await fetch(`${URL}/${id}`, { method: 'DELETE' })
        const filteredTransactions = transactions.filter((transaction) => (transaction.id !== id))
        setTransactions(filteredTransactions)
    }
    const addTransactions = async (newTransaction) => {
        const method = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newTransaction)
        }
        const response = await fetch(`${URL}?_sort=id&_order=asc`, method)
        const data = await response.json()
        setTransactions([data, ...transactions,])
    }
    const fetchFeedback = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setTransactions(data)
        } catch (error) {
            console.log(error);
        }
    }
    return (<GlobalContext.Provider value={{
        transactions,
        deleteTransaction,
        addTransactions
    }}>
        {children}
    </GlobalContext.Provider>)
}

