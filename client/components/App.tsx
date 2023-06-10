import { useEffect, useState } from 'react'
import { getWidgets } from '../apiClient'
import * as Models from '../../models/Widget'
import AddWidgetForm from './AddWidget'
import './main.css'
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
  )
}

export default App
