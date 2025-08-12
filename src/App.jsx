```jsx
import React from 'react'
import { Button } from '../components/ui/button'
import './App.css'

function App() {
  const handleClick = () => {
    alert('Hello from React + Vite!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hello World! 👋
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to your React + Vite + Tailwind CSS application
        </p>
        <Button 
          onClick={handleClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
        >
          Click me!
        </Button>
        <div className="mt-6 text-sm text-gray-500">
          Built with ⚡ Vite and 🎨 Tailwind CSS
        </div>
      </div>
    </div>
  )
}

export default App
```