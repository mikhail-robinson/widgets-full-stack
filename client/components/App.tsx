import * as Models from '../../models/Widget'
import { useEffect, useState } from 'react'
import { getWidgets } from '../apiClient'
import AddWidget from './AddWidget'
import DeleteWidget from './DeleteWidget'
import UpdateWidget from './UpdateWidget'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  useEffect(() => {
    getWidgets()
      .then((widget) => {
        setWidgets(widget)
      })
      .catch((error) => {
        if (error instanceof Error) {
          console.error(error.message)
        }
      })
  }, [])

  function loadWidgets() {
    getWidgets()
      .then((fetchedWidgets) => {
        // Set some state with languages
        setWidgets(fetchedWidgets)
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
      <div>
        <h2>Add New Widget</h2>
        <AddWidget loadWidgets={loadWidgets} />
      </div>
      <ul>
        {widgets.map((widget) => (
          <li key={widget.id}>
            <div className='container'>
              <div>
                <p>Product Name: {widget.name}</p>
                <p>Qty: {widget.inStock}</p>
                <p>Price: ${widget.price}</p>
                <p>Rating: {widget.rating}</p>
                <DeleteWidget id={widget.id} loadWidgets={loadWidgets} /></div>
              <div className='spacetaker'></div>
              <div><UpdateWidget widget={widget} loadWidgets={loadWidgets} /></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
