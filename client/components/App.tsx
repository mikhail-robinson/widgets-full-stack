import { useEffect, useState } from 'react'
import * as Models from '../../models/Widget'
import { getWidgets } from '../apiClient'
import Widget from './Widget'
import AddWidget from './AddWidget'
import { addWidget } from '../apiClient'


function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])
  const [newWidget, setNewWidget] = useState({
    name : '',
    price: 0,
    mfg : '',
    inStock : 0,
  } as Models.NewWidget)

  useEffect(() => {
    getWidgets().then((res) => setWidgets(res)).catch((err) => 
    { 
      if (err instanceof Error) 
      console.error(err.message)})
  }, [])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name 
    const value = event.target.value
    const newData = { ...newWidget, [name]: value }

    setNewWidget(newData)
  }


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await addWidget(newWidget)
  }

  return (
    <div style = {{display: "flex", flexDirection: "column", gap : "25px", alignItems: 'center'}}>
      <h1>Widgets for the win!</h1>
      <AddWidget newWidget = {newWidget} handleChange = {handleChange} handleSubmit = {handleSubmit}/>
      {
        widgets.map((widget) => (
            <Widget key = {widget.name} id={widget.id} name={widget.name} price = {widget.price} mfg = {widget.mfg} inStock = {widget.inStock}/>
        ))
      }
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