import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from '../../store/modules/counter/types'

export default function Main() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  useEffect(() => {
    console.log(counter)
  }, [counter])

  return (
    <>
      <h1>thats main page { counter.number }</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  )
}
