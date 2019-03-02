import { useReducer } from 'react';

function formReducer(state, action) {
  if (action.type === 'SET') {
    return { ...state, [action.field]: action.value }
  }
  return state
}

const initialState = { email: "", privacyPolicy: false, first: "", last: "" }

export function useForm() {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const setField = ({ target }) => {
    dispatch({
      type: 'SET',
      field: target.name,
      value: target.value
    })
  }

  return { formData: state, setField }
}
