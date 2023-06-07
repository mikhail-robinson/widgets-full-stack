import { useEffect, useState } from 'react'
//import { Widget } from '../../models/Widget'
import * as Models from '../../models/Widget'
import { getWidgets } from '../apiClient'
import AddWidgetForm from './AddWidgetForm'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  useEffect(() => {
    loadWidget()
  }, [])

  function loadWidget() {
    getWidgets()
      .then((gotWidgets) => {
        setWidgets(gotWidgets)
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
        <AddWidgetForm loadWidget={loadWidget} />
      </div>
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
    </>
  )
}

export default App
