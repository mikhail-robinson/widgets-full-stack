import { useEffect, useState } from 'react'
import { getWidgets } from '../apiClient'
import { Widget, NewWidget } from '../../models/Widget'
import AddWidgetsForm from './AddWidget'

function App() {
  const [widgets, setWidgets] = useState<Widget[]>([])

  useEffect(() => {
    loadWidgets()
  }, [])

  function loadWidgets() {
    getWidgets()
      .then((widget) => {
        setWidgets(widget)
      })
      .catch((err) => {
        if (err instanceof Error) {
          console.error(err.message)
        }
      })
  }


  return (
    <>
      <div>
        <h1>Widgets for the win!</h1>
        <AddWidgetsForm loadWidgets={loadWidgets} />

        {widgets.map((widget) => (
          <div
            key={widget.id}
            style={{
              backgroundColor: widget.name.split(' ')[0],
              width: '200px',
            }}
          >
            <h3>{widget.name}</h3>
            <p>Price: {widget.price}</p>
            <p>Manufacturer: {widget.mfg}</p>
            <p>In Stock: {widget.inStock}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
