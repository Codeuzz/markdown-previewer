import { useState } from 'react'
import './App.css'
import { Editor } from './components/Editor'
import { Previewer } from './components/Previewer'

function App() {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
    console.log(e.target.value)
  }

  return (
    <>
      <Editor value={input} onChange={handleChange}/>
      <Previewer input={input} />
    </>
  )
}

export default App
