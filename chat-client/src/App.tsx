import {useState} from 'react'
import './App.css'


function App() {
  let [message, setMessage] = useState('')
  const fetchData = () => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/hello-world`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }

  return (
    <>
      <button onClick={fetchData}>CLICK</button>
      <strong>{message}</strong>
    </>
  )
}

export default App
