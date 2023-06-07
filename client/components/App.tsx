import { useEffect, useState } from 'react'
import { getWidgets } from '../apiClient'
import { Widget } from '../../models/Widget'

function App() {
  const [widgets, setWidgets] = useState<Widget[]>([])

  useEffect(() => {
    getWidgets()
      .then((widget) => {
        const widgetArray = Array.isArray(widget) ? widget : [widget]
        setWidgets(widgetArray)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [])

  return (
    <>
      <div>
        <h1>Widgets for the win!</h1>
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
