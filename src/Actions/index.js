export const ADD_ENTRY = 'add_entry'
export const ADD_AVAILABILITY = 'add_availability'
export const ADD_UNAVAILABILITY = 'addUnavailability'

export function addEntry(values){
    return{
        type: ADD_ENTRY,
        payload: values
    }
}

export function addAvailability(values){
    return{
        type: ADD_AVAILABILITY,
        payload: values
    }
}

export function addUnavailability(values){
    return{
        type: ADD_UNAVAILABILITY,
        payload: values
    }
}