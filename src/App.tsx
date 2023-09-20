import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { mainrouter } from './routes/router'

const App = () => {
  return (
    <div>
         <RouterProvider router={mainrouter}/>
    </div>
  )
}

export default App