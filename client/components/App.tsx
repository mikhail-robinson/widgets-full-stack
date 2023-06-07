import { useEffect, useState } from 'react'
import { getWidgets } from '../apiClient'
import * as Models from '../../models/Widget'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  useEffect(() => {
    getWidgets()
      .then((widgets) => {
        return setWidgets([widgets])
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      
    </div>
  )
}

export default App
