import { useEffect, useState } from 'react'
import { Widget } from '../../models/Widget'
import { getWidgets } from '../apiClient'
import * as Models from '../../models/Widget'
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

        {widgets.map((widget) => (
          <p key={widget.id}>{widget.name}</p>
        ))}
      </div>
    </>
  )
}

export default App
