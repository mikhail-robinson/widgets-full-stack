import { useEffect, useState } from 'react'
import { Widget } from '../../models/Widget'
import { getWidgets } from '../apiClient'

function App() {
  const [widgets, setWidgets] = useState([] as Widget[])

  useEffect(() => {
    getWidgets()
      .then((gotWidgets) => {
        setWidgets(gotWidgets)
      })
      .catch((err) => {
        if (err instanceof Error) {
          console.error(err.message)
        }
      }),
      [widgets]
  })

  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
