import { useEffect, useState } from 'react'
import * as Models from '../../models/Widget'
import { getWidgets } from '../apiClient'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])
  useEffect(() => {
    getWidgets()
      .then((fetchedWidgets) => {
        setWidgets(fetchedWidgets)
        // console.log(fetchedWidgets)
      })
      .catch(() => {
        console.error("Something went wrong rendering widgets list.")
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
