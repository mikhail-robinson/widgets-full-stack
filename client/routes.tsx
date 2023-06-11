import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/App'
import SubmitPage from './components/SubmitPage'

export default createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route
          path="submit"
          element={
            <SubmitPage
              toggleForm={function (): void {
                throw new Error('Function not implemented.')
              }}
            />
          }
        />
      </Route>
    </>
  )
)
