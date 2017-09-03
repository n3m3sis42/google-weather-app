import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // ES5 way to do this is with concat
      return [ action.payload.data, ...state ]
  }
  return state
}
