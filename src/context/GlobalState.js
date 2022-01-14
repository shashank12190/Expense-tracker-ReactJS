import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transcations: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

//create Context

export const GlobalContext = createContext(initialState)



//Provider Components

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    //Actions Create
    const deleteTranscation = (id) => {
        dispatch({
            type: 'DELETE_TRANSCATION',
            payload: id
        })
    }
    const addTransctions = (transcation) => {
        dispatch({
            type: 'ADD_TRANSCATION',
            payload: transcation
        })
    }
    return (<GlobalContext.Provider value={{
        transcations: state.transcations,
        deleteTranscation,
        addTransctions
    }}>
        {children}
    </GlobalContext.Provider>)
}

