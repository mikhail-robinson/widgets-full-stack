import { useEffect, useState } from 'react'
import { Widget } from '../../models/Widget'
import { getWidgets } from '../apiClient'
function App() {
  const [widgets, setWidgets] = useState([] as Widget[])

  useEffect(() => {
    console.log('render')
    getWidgets()
      .then((widget) => setWidgets(widget))
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
            <p>{widget.name}</p>
            <p>{widget.price}</p>
            <p>{widget.mfg}</p>
            <p>{widget.inStock}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
