import { useEffect, useState } from 'react'
import * as Models from '../../models/Widget'
import { getWidgets } from '../apiClient'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  useEffect(() => {
    getWidgets()
      .then((widgets) => {
        setWidgets(widgets)
      })
      .catch((err) => {
        if (err instanceof Error) {
          console.error(err.message)
        }
      })
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map((widget) => (
          <li key={widget.id}>
            <h3>
              {widget.name}, {widget.mfg} - {widget.price}
            </h3>
            <p>In Stock: {widget.inStock}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
