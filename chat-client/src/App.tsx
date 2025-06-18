import {useState} from 'react'
import './App.css'


function App() {
  let [message, setMessage] = useState('')
  const fetchData = () => {
    fetch('/api/hello-world')
      .then(res => res.text())
      .then(data => setMessage(data))
  }

  return (
    <>
      <button onClick={fetchData}>CLICK</button>
      <strong>{message}</strong>
    </>
  )
}

export default App
