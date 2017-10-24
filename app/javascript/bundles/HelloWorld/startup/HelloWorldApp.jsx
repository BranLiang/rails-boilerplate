import React from 'react'
import { Provider } from 'react-redux'

import configureStore from '../../../utils/createStore'
import HelloWorldContainer from '../containers/HelloWorldContainer'
import rootReducer from '../models'
import rootSaga from '../sagas'

console.log(HelloWorldContainer)
// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const HelloWorldApp = (props) => (
  <Provider store={configureStore(props, rootReducer, rootSaga)}>
    <HelloWorldContainer />
  </Provider>
)

export default HelloWorldApp
