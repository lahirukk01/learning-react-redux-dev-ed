import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/counter'

function App() {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
          { isLogged ? <h2>I am logged</h2> : ''}
          <button onClick={() => dispatch(increment(3))}>+</button>
          <button onClick={() => dispatch(decrement(2))}>-</button>
      </header>
    </div>
  );
}

export default App;
