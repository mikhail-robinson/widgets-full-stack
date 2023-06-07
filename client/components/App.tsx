import { useEffect, useState } from 'react'
import { Widget } from '../../models/Widget'
import { getWidgets } from '../apiClient'

function App() {
  const [widgets, setWidgets] = useState([] as Widget[])

  useEffect(() => {
    loadWidgets()
    console.log('using the effect')
  }, [])

  function loadWidgets() {
    //get the widgets from the api
    getWidgets()
      .then((data) => setWidgets(data))
      // .then((data) => console.log(data))
      .catch((err) => {
        if (err instanceof Error) {
          console.error(err.message)
        }
      })
  }

  return (
    <div>
      <ul>
        {widgets.map((widget) => (
          <li key={widget.id}>{widget.name}</li>
        ))}
      </ul>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
