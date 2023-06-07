import { useEffect, useState } from 'react'

import * as Models from '../../models/Widget'

import { getWidgets } from '../apiClient'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  useEffect(() => {
    getWidgets()
      .then((fetchedWidgets) => {

        setWidgets(fetchedWidgets)
        
      })

      .catch((err) => {
        if (err instanceof Error) {
          console.error(err.message)
        }
      })
  }, [])
  return (
    <>
      <div>
        <h1>Widgets for the win!</h1>
      </div>
      <ul>
         {widgets.map((widget)=> (
        <li key={widget.id}>
          <p>{widget.name}</p>
        </li>
        ))}
      </ul>

    
    </>
  )
}

export default App
