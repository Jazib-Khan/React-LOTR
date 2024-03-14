import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header>
          Header
      </header>
      <main>
        <img src="/landscape.jpg" alt="lotr-background-img" className="bg-image" />
        <Dashboard />
      </main>
      {/* <footer>Footer</footer> */}
    </div>
  )
}

export default App
