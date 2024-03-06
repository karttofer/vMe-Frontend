// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'

// Router
import {router} from './configs/routes/router'

// Style
import './styles/index.scss'

// Vitals
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
reportWebVitals()
