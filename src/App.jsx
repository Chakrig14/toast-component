import { useEffect, useState } from 'react'
import './App.css'
import Notification from './components/Notification'

function App() {
  const [type, setType] = useState("");
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setType(null);
    }, 3000)
    return () => clearTimeout(timer)
  }, [type])
  return (
    <>
      <h1>Toast</h1>
      <button onClick={() => setType("success")}>Success</button>
      <button onClick={() => setType("error")}>Error</button>
      <button onClick={() => setType("information")}>Information</button>
      <button onClick={() => setType("warning")}>Warning</button>
      <Notification info={type} />
    </>
  )
}

export default App
