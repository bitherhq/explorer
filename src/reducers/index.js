import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import blocks from './blocks'
import network from './network';

export default combineReducers({
  router: routerReducer,
  blocks,
  network
})
