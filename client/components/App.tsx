import { useEffect, useState } from 'react'
import { getWidgets } from '../apiClient'
import * as Models from '../../models/Widget'
import AddWidgetForm from './AddWidget'
import './main.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])
  const [showForm, setShowForm] = useState(true) //taken from chatGPT. Used to set the visibily of the form based on a condition

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
          console.error('Failed to load widgets', err)
        }
      })
  }

  function toggleForm() {
    setShowForm((prevState) => !prevState)
  }

  return (
    <main>
      <div className="container">
        <h1>Widgets for the win!</h1>
        {showForm && <AddWidgetForm loadWidgets={loadWidgets} />}
        <Outlet />
        {widgets.map((widget) => (
          <div className="widget" key={widget.id}>
            <p className="widget-name">Name: {widget.name}</p>
            <p className="widget-price">Price: ${widget.price}</p>
            <p className="widget-mfg">MFG: {widget.mfg}</p>
            <p className="widget-stock">Stock: {widget.inStock}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
