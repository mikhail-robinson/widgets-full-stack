import { useEffect, useState } from 'react'
import { getWidgets } from '../apiClient'
import * as Models from '../../models/Widget'
import AddWidgetForm from './AddWidget'
import SubmitPage from './SubmitPage'
import './main.css'
import { BrowserRouter as Router, Route, Link, Outlet } from 'react-router-dom'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  useEffect(() => {
    loadWidgets()
  }, [])

  function loadWidgets() {
    getWidgets()
      .then((fetchedWidgets) => {
        setWidgets(fetchedWidgets)
      })
      .catch((err) => {
        if (err instanceof Error) {
          console.error('Failed to load widgets')
        }
      })
  }

  return (
    <Router>
      <Route path="/submit">
        <SubmitPage />
      </Route>

      <div className="container">
        <h1>Widgets for the win!</h1>
        <AddWidgetForm loadWidgets={loadWidgets} />

        {widgets.map((widget) => (
          <div className="widget" key={widget.id}>
            <p className="widget-name">Name: {widget.name}</p>
            <p className="widget-price">Price: ${widget.price}</p>
            <p className="widget-mfg">MFG: {widget.mfg}</p>
            <p className="widget-stock">Stock: {widget.inStock}</p>
          </div>
        ))}
      </div>
      <Outlet />
    </Router>
  )
}

export default App
