import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
          Header
      </header>
      <main>
        <img src="" />
        <Dashboard />
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App
