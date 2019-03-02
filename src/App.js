import React from 'react'
import EmailForm from './components/EmailForm'
import NameForm from './components/NameForm'
import Congratulations from './components/Congratulations'
import { useAppState } from './hooks/useAppState'

const App = (props) => {
  const { state, setState } = useAppState()
  const { current } = state

  const setEmail = (email) => setState({ field: "email", value: email, next: "name" })

  const setName = async (first, last) => {
    await setState({ field: 'name', value: { first, last }, next: "congratulations" })
    const user = { first, last, email: state.email }
    console.log(user)
  }

  return (
    <div className="App">
      {
        current !== "congratulations" ? <div className="join-message">Join the list</div> : null
      }
      {
        current === "email" ? <EmailForm setEmail={ (email) => setEmail(email) }/>
          : ( current === "name" ? <NameForm setName={ (first, last) => setName(first, last) }/>
            : <Congratulations />)
      }
    </div>
  );
}

export default App
