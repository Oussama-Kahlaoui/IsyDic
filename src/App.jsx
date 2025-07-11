import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center gap-8 my-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 w-24 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 w-24 hover:scale-110 transition-transform" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Vite + React + Tailwind</h1>
      <div className="card bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md mx-auto text-center">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition-colors"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-gray-700 dark:text-gray-300">
          Edit <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-8 text-center text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
