import { useState } from 'react'
import './App.css'
import { Editor } from './components/Editor'
import { Previewer } from './components/Previewer'

function App() {

  return (
    <>
      <Editor />
      <Previewer />
    </>
  )
}

export default App
