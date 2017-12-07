import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import blocks from './blocks'

export default combineReducers({
  router: routerReducer,
  blocks
})
