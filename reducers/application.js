import { EXAMPLE_ACTION } from '../actions'

const initialState = {
  exampleWord: 'World'
}

export default function application(state=initialState, action) {
  switch(action.type) {
    case EXAMPLE_ACTION:
      return Object.assign({}, state, {'exampleWord': action.exampleWord})
    default:
      return state
  }
}