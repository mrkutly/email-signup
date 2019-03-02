import { useReducer } from 'react';

function appReducer(state, action) {
  switch(true) {
    case action.type === 'SET' && action.field === 'name':
      return { ...state, first: action.value.first, last: action.value.last, current: action.next }

    case action.type === 'SET':
      return { ...state, [action.field]: action.value, current: action.next }

    default:
      return state
  }
}

const initialState = { email: null, first: null, last: null, current: "email" }

export function useAppState() {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const setState = ({ field, value, next }) => {
    dispatch({
      type: 'SET',
      field,
      value,
      next
    })
  }

  return { state, setState }
}
