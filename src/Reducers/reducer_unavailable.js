import { ADD_UNAVAILABILITY } from '../Actions'

export default function(state=[], action){
    switch(action.type){
        case ADD_UNAVAILABILITY:
        const newState = state
        newState.push(action.payload)
        return newState
        default:
        return state
    }
}

// const initialState = state
// initialState.push(action.payload.values)
// return initialState


// return([
//     {id: '1', empname: 'Suraj', class: 'Developer', projectdesc: 'React', date: '03/24/2010'},
//     {id: '2', empname: 'Suraj', class: 'Developer', projectdesc: 'React', date: '03/24/2010'},
//     {id: '3', empname: 'Suraj', class: 'Developer', projectdesc: 'React', date: '03/24/2010'},
//     {id: '4', empname: 'Suraj', class: 'Developer', projectdesc: 'React', date: '03/24/2010'},
//     {id: '5', empname: 'Suraj', class: 'Developer', projectdesc: 'React', date: '03/24/2010'}
// ])