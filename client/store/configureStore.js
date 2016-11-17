/** @flow */
import {createStore, compose, combineReducers} from 'redux'
import reducers from '../reducers'

export default function configureStore() {
  const reducer = combineReducers(reducers)
  const store = createStore(reducer)

  return store
}
