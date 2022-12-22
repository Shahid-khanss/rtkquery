import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './features/sliceReducer'


function App() {
  

const dispatch = useDispatch()

const state = useSelector(state=>state.toDo)

console.log(state)
useEffect(()=>{
  dispatch(getData())
},[])

  return (
    <div className="App">
      {state.data.map(item=>{
        return <p>{item.title}</p>
      })}
    </div>
  )
}

export default App
