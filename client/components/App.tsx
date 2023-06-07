import { useEffect, useState } from 'react'
import * as Models from '../../models/Widget'
import { getWidgets } from '../apiClient'
import Widgets from './Widgets'
import AddWidget from './AddWidget'
import { addWidget } from '../apiClient'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  useEffect(() => {
    loadWidgets()
  }, [])

  function loadWidgets() {
    getWidgets()
      .then((res) => {
        setWidgets(res)
        
      })
      .catch((err) => {
        if (err instanceof Error) console.error(err.message)
      })
  }


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        alignItems: 'center',
      }}
    >
      
      <h1>Widgets for the win!</h1>

      <AddWidget loadWidgets={loadWidgets} />
      <Widgets widgets={widgets} />
    </div>
  )
}

export default App

//handleChange
//This function will update the data state everytime the user types something in. And then it gets updated in the form.

//handleSubmit
//This function will run the  AddWidget api, taking the data from the function and sending through the data state.

//props for the data, which is a state holding: name, price, mfg, and inStock.
//Pass these through as props to the AddWidget, so they update.
