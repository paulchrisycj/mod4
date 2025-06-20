import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import StartPage from './components/StartPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<StartPage/>} />
    </Routes>
  )
}

export default App
