import { combineReducers } from 'redux'
import DispatcherReducer from './reducer_dispatcherTable'
import AvailableReducer from './reducer_available'
import UnavailableReducer from './reducer_unavailable'
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers ({
    dispatchers: DispatcherReducer,
    availables: AvailableReducer,
    unavailables: UnavailableReducer,
    form: formReducer
})

export default rootReducers