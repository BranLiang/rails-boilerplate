import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  name: require('./name').reducer
})

export default rootReducer
