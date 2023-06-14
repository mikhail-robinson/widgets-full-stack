import { MouseEventHandler, useEffect, useState } from 'react'
import * as Models from '../../models/Widget'
import { deleteWidget, getWidgets } from '../apiClient'
import AddWidget from './AddWidget'
import DeleteWidgets from './DeleteWidget'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  useEffect(() => {
    loadWidgets(), []
  })

  function loadWidgets() {
    getWidgets()
      .then((fetchedWidgets) => {
        setWidgets(fetchedWidgets)
      })
      .catch((error) => {
        if (error instanceof Error) {
          console.error(error.message)
        }
      })
  }

  return (
    <div className="home">
      <div>
        <AddWidget loadWidgets={loadWidgets} />
      </div>
      <main>
        <h1>Widgets for the win!</h1>
        <ul>
          {widgets.map((widget) => (
            <li key={widget.id}>
              <h2>
                {widget.name}, {widget.mfg} - ${widget.price}
                <DeleteWidgets widget={widget} loadWidgets={loadWidgets} />
              </h2>
              <p>In Stock: {widget.inStock}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
