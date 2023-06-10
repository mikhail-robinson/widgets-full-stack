import { useEffect, useState } from 'react'
import * as Models from '../../models/Widget'
import { getWidgets } from '../apiClient'
import Widgets from './Widgets'
import AddWidget from './AddWidget'

function App() {
  // add use state to store widgets and import Widget type
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  // add use effect which accepts a function
  useEffect(() => {
    loadWidgets()
  }, [])

  // create loadWigets function
  function loadWidgets() {
    getWidgets()
      .then((gottenWidgets) => {
        // console.log(gottenWidgets)
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
      {/* needs to pass a props */}
      <AddWidget loadWidgets={loadWidgets} />
      {/* you need to pass the widgets origin state as props first*/}
      <Widgets widgets={widgets} />
    </div>
  )
}

export default App
