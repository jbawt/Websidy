import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  const theme = useSelector((state) => state.theme.mode)

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App

