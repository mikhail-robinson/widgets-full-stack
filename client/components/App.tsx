import { useEffect, useState } from 'react'
import { getWidgets } from '../apiClient'
import { Widget } from '../../models/Widget'
import AddWidgetsForm from './AddWidget'
import WidgetComponent from './Widgets'

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
          <WidgetComponent key={widget.id} widget={widget} />
        ))}
      </div>
    </>
  )
}

export default App
