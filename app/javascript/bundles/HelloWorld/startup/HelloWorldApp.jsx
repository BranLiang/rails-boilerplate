import React from 'react'
import { Provider } from 'react-redux'

import configureStore from '../../../utils/createStore'
import HelloWorldContainer from '../containers/HelloWorldContainer'
import rootReducer from '../models'
import rootSaga from '../sagas'

const HelloWorldApp = (props) => (
  <Provider store={configureStore(props, rootReducer, rootSaga)}>
    <HelloWorldContainer />
  </Provider>
)

export default HelloWorldApp
