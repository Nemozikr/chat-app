import { useEffect, useState} from 'react'
import './App.css'


function App() {
  let [message, setMessage] = useState('')
  const fetchData = () => {
    fetch('/api/hello-world')
      .then(res => res.json())
      .then(data => setMessage(data))
  }
  useEffect(() => {
    console.log(message)
  }, [message])
  return (
    <>
      <button onClick={fetchData}>CLICK</button>
      <strong>{message}</strong>
    </>
  )
}

export default App
