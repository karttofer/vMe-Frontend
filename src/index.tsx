// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

// Router
import {router} from './configs/routes/router'

// Style
import 'styles/index.scss'

// Vitals
import reportWebVitals from './reportWebVitals'

const {Button} = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraBaseProvider>
  </React.StrictMode>
)
reportWebVitals()
