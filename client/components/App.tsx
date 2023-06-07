import { useEffect, useState } from 'react'
import * as Modules from '../../models/Widget'
import { getWidgets } from '../apiClient'

function App() {
  const [widgets, setWeidgets] = useState([] as Modules.Widget[])

  useEffect(() => {
    getWidgets()
      .then((fetchedwidgets) => {
        setWeidgets(fetchedwidgets)
      })
      .catch((error) => {
        if (error instanceof Error) {
          console.error('Ops, something went wrong when fetching data.')
        }
      })
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <div>
        {widgets.map((widget) => (
          <>
            <li key={widget.id}>
              Widget Name: {widget.name} / Widget Price: {widget.price} / In
              Stock: {widget.inStock}
            </li>
          </>
        ))}
      </div>
    </div>
  )
}

export default App
