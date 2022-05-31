import { combineReducers } from 'redux'
import { stuffReducer } from './stuffReducer'

const reducers = combineReducers({
  stuff: stuffReducer
})

export default reducers