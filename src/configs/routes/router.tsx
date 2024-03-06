// Dependencies
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/playground',
    element: <div>Playground</div>,
    children: [
      {
        path: '/playground/challenges',
        element: <div>Challenges</div>,
      },
      {
        path: '/playground/leaderboard',
        element: <div>Leaderboard</div>,
      },
    ],
  },
  {
    path: '/our-mission',
    element: <div>Our Mission</div>,
  },
  {
    path: '/for-companies',
    element: <div>for companies</div>,
    children: [
      {
        path: '/for-companies/skill-assesments',
        element: <div>skill assesment</div>,
      },
      {
        path: '/for-companies/future',
        element: <div>future</div>,
      },
    ],
  },
])
export { router }
