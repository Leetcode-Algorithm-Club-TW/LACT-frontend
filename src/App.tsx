import { useState } from 'react'
import CardPage from './Home/card/page'
import './App.css'

function App() {
  
  return (
    <div className="relative w-full max-h-[100vh] ">
       <img className='w-full max-h-[100vh]' src='./public/images/bg-Technology.png' alt="bg-bg-Technology" />
       <CardPage />
    </div>
  )
}

export default App
