import { useEffect, useState } from 'react'
import * as Models from '../../models/Widget'
import { getWidgets } from '../apiClient'
import AddWidgetForm from './AddWidgetForm'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  useEffect(() => {
    getWidgets()
      .then((gotWidgets) => {
        setWidgets(gotWidgets)
      })
      .catch((err) => {
        if (err instanceof Error) {
          console.error(err.message)
        }
      })
  }, [widgets])

  return (
    <>
      <h1>Widgets for the win!</h1>
      <AddWidgetForm
        loadWidgets={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
      {widgets.map((widget) => {
        return (
          <h3 key={widget.id}>
            <ul>{widget.name}:</ul>
            <li>Price: {widget.price}</li>
            <li>Made by: {widget.mfg}</li>
            <li>Stock: {widget.inStock}</li>
          </h3>
        )
      })}
    </>
  )
}

export default App
