import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Actions ------------- */

const { Types, Creators } = createActions({
  updateName: ['text']
})

export const NameTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = ''

/* ------------- Reducers ------------- */

export const update = (state, { text }) => text

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_NAME]: update
})
