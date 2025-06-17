import { useEffect } from 'react'
import './App.css'

let message = '';
useEffect(() => {
  fetch('/api/message')
    .then(res => res.json())
    .then(data => message=data)
})

function App() {

  return (
    <>
      <a href="/api">CLICK</a>
      <strong>{message}</strong>
    </>
  )
}

export default App
