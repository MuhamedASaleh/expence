import React , { createContext , useReducer} from "react";


// initial state 
const initialState = {
    transactions : [
        {id:1 , text:'flower' , amount:-20},
        {id:2 , text:'salary' , amount:300},
        {id:3 , text:'book' , amount:-10},
        {id:4 , text:'camera' , amount:150}
    ]
} 

// create context 
export const GloableContext =createContext(initialState)

// provider componenets
export const GloableProvider=({children})=>{

    const [state , dispatch] = useReducer(AppReducer , initialState)

    return (
        <GloableContext.Provider value={{
            transactions : state.transactions
        }}>
            {children}
        </GloableContext.Provider>
    )

}







