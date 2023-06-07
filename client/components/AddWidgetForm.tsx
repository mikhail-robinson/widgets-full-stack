import { useState } from 'react'
import { addWidget } from '../apiClient'

interface Props {
  loadWidgets: () => void
}

export default function AddWidgetForm(props:Props) {
  const [widgetData, setWidgetData] = useState({
    name: '',
    price: 0,
    mfg: '',
    inStock: 0,
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name

    const value = event.target.value

    if (name === "price" || name == "inStock") {
      setWidgetData(() => ({ ...widgetData, [name]: Number(value) }))
      return
    }

    console.log(name);
    
    console.log(typeof value);
    

    const newData = { ...widgetData, [name]: value }

    
    
    
    setWidgetData(newData)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(widgetData)
    await addWidget(widgetData)
    props.loadWidgets()
  }

  return (
    <>
      <h2>Add a Widget</h2>
      <form onSubmit={handleSubmit} className="form flex">
        <label htmlFor="name">Widget Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={widgetData.name}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          value={widgetData.price}
        />
        <label htmlFor="mfg">Manufacturer</label>
        <input
          type="text"
          name="mfg"
          id="mfg"
          onChange={handleChange}
          value={widgetData.mfg}
        />
        <label htmlFor="inStock">In Stock</label>
        <input
          type="number"
          name="inStock"
          id="inStock"
          onChange={handleChange}
          value={widgetData.inStock}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
