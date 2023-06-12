import { useEffect, useState } from 'react'
import { Widget } from '../../models/Widget'
import { getWidgets } from '../apiClient'

function App() {
  const [widgets, setWidgets] = useState([] as Widget[])
  useEffect(() => {
    getWidgets()
      .then((fetchedWidgets) => {
        setWidgets(fetchedWidgets)
        // console.log(fetchedWidgets)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map((widget) => (
          <li key={widget.id}>
            <div>
              <p>Product Name: {widget.name}</p>
              <p>Qty: {widget.inStock}</p>
              <p>Price: ${widget.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
