import { ADD_ENTRY } from '../Actions'

export default function (state = [], action){
    switch(action.type){
        case ADD_ENTRY:
        const newState = state
        newState.push(action.payload)
        return newState
        default:
        return state
    }  
}


// {id: '1', date: '29/03/1991', project: 'Code Red', total: '1', close: 'Nil', super: '2'},
// {id: '2', date: '29/03/1991', project: 'Code Red', total: '1', close: 'Nil', super: '2'}