import { useState } from 'react'
import { getWidgets } from '../apiClient'

function App() {
  const [widgets, setWidgets] = useState([] as Widget[])

  useEffect(() => {
    getWidgets()
    .then((widgets) => {
      setWidgets(widgets)
    })
    .catch((error) => {
      console.error(err.message)
    })
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
