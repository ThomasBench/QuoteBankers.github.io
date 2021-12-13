import * as React from 'react'
import { useReducer } from 'react'
import Paper from '@mui/material/Paper'
import Content from './Content'
import theme from './Theme'
import { ThemeProvider } from '@mui/material'

function handleSteps(state, action) {
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'prev':
            newState.index = state.index -1;
            break;
        case 'slidClick':
            newState.index= action.data
            break;
        default:
            newState.index = state.index +1;
            newState.carac[action.type] = action.data
            break;
    }
    return newState
}

const initialState = {index: 0, carac : {age: 0, gender : '', job: '', subject : '', emotion: ''} }
const stepContext = React.createContext()
const Env = () => {

    const [state,dispatcher] = useReducer(handleSteps, initialState)
    return (
        <Paper elevation = {3} style = {{height: 500,width: 800, margin: 'auto', padding : 30}}>
            <stepContext.Provider value = {{state, dispatcher}}><ThemeProvider theme = {theme}><Content/></ThemeProvider></stepContext.Provider>
        </Paper>
    )
}
export {stepContext}
export default Env
