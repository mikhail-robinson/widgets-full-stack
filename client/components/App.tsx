import { useEffect, useState } from 'react'
import * as Models from '../../models/Widget'
import { getWidgets } from '../apiClient'
import Widgets from './Widgets'
import AddWidget from './AddWidget'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  useEffect(() => {
    loadWidgets()
  }, [])

  function loadWidgets() {
    getWidgets()
      .then((gottenWidgets) => {
        setWidgets(gottenWidgets)
      })
      .catch((err) => {
        if (err instanceof Error) {
          console.error(err.message)
        }
      })
  }

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <AddWidget loadWidgets={loadWidgets} />
      <Widgets widgets={widgets} loadWidgets={loadWidgets} />
    </div>
  )
}

export default App
