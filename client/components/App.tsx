import { useEffect, useState } from 'react'
import * as Models from '../../models/Widget'
import { getWidgets } from '../apiClient'
import AddWidget from './AddWidget'
import 'bulma/css/bulma.css'

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
      <div className ='container is-primary'>
        <div >
        <h1 className= 'title'>Widgets for the win!</h1>
        </div>
        <br></br>
      </div>
      <ul>
         {widgets.map((widget)=> (
        <li key={widget.id}>
          <p>{widget.name}</p>
        </li>
        ))}
      </ul>
      <div>
        <AddWidget/>
      </div>

    
    </>
  )
}

export default App
