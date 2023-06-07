import { useEffect, useState } from 'react'
import { Widget } from '../../models/Widget'
import { getWidgets } from '../apiClient'

function App() {
  const [widgets, setWeidgets] = useState([] as Widget[])

  useEffect(() => {
    getWidgets().then(fetchedwidgets => {
      console.log("result of getWidgets: ", fetchedwidgets)
    }).catch((error) => {
      if (error instanceof Error) {
        console.error("Ops, something went wrong when fetching data.")
      }
    })
  }
    , [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      
    </div>
  )
}

export default App
