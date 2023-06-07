import { useEffect, useState } from 'react'
import { getWidgets } from '../apiClient'
import * as Models from '../../models/Widget'
import AddWidgetForm from './AddWidget'
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
          console.error(err.message)
        }
      })
  }

  return (
    <>
      <div>
        <h1>Widgets for the win!</h1>
        <AddWidgetForm loadWidgets={loadWidgets} />

        {widgets.map((widget) => (
          <>
            <div key={widget.id}>
              <p>Name: {widget.name}</p>
              <p>Price: ${widget.price}</p>
              <p>MFG: {widget.mfg}</p>
              <p>Stock: {widget.inStock}</p>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default App
