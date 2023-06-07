import { useEffect, useState } from 'react'
import * as Models from '../../models/Widget'
import { getWidgets } from '../apiClient'
import Widget from './Widget'


function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  useEffect(() => {
    getWidgets().then((res) => setWidgets(res)).catch((err) => 
    { 
      if (err instanceof Error) 
      console.error(err.message)})
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      {
        widgets.map((widget) => (
            <Widget key = {widget.name} id={widget.id} name={widget.name} price = {widget.price} mfg = {widget.mfg} inStock = {widget.inStock}/>
        ))
      }
    </div>
  )
}

export default App
